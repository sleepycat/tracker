const { DMARC_REPORT_API_TOKEN, DMARC_REPORT_API_SECRET } = process.env

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql')
const {
  globalIdField,
  connectionDefinitions,
  connectionArgs,
} = require('graphql-relay')
const { GraphQLDateTime } = require('graphql-scalars')
const { t } = require('@lingui/macro')

const { RoleEnums, LanguageEnums, PeriodEnums } = require('../../enums')
const {
  Acronym,
  Domain,
  Slug,
  Selectors,
  Year,
  TranslatedString,
  TranslatedInt,
  TranslatedBoolean,
  EmailAddress,
  TranslatedID,
} = require('../../scalars')
const { nodeInterface } = require('../node')
const { periodType } = require('./dmarc-report')

/* Domain related objects */
const domainType = (i18n) =>
  new GraphQLObjectType({
    name: 'Domain',
    fields: () => ({
      id: globalIdField('domains'),
      domain: {
        type: Domain(i18n),
        description: i18n._(t`Domain that scans will be ran on.`),
        resolve: ({ domain }) => domain,
      },
      lastRan: {
        type: GraphQLDateTime,
        description: i18n._(
          t`The last time that a scan was ran on this domain.`,
        ),
        resolve: ({ lastRan }) => lastRan,
      },
      selectors: {
        type: new GraphQLList(Selectors(i18n)),
        description: i18n._(
          t`Domain Keys Identified Mail (DKIM) selector strings associated with domain.`,
        ),
        resolve: ({ selectors }) => selectors,
      },
      organizations: {
        type: organizationConnection(i18n).connectionType,
        args: connectionArgs,
        description: i18n._(t`The organization that this domain belongs to.`),
        resolve: async (
          { _id },
          args,
          { loaders: { orgLoaderConnectionArgsByDomainId } },
        ) => {
          const orgs = await orgLoaderConnectionArgsByDomainId({
            domainId: _id,
            ...args,
          })
          return orgs
        },
      },
      email: {
        type: emailScanType(i18n),
        description: i18n._(t`DKIM, DMARC, and SPF scan results.`),
        resolve: ({ _id, _key }) => {
          return { _id, _key }
        },
      },
      web: {
        type: webScanType(i18n),
        description: i18n._(t`HTTPS, and SSL scan results.`),
        resolve: ({ _id, _key }) => {
          return { _id, _key }
        },
      },
      dmarcSummaryByPeriod: {
        description: i18n._(t`Summarized DMARC aggregate reports.`),
        args: {
          month: {
            type: GraphQLNonNull(PeriodEnums(i18n)),
            description: i18n._(
              t`The month in which the returned data is relevant to.`,
            ),
          },
          year: {
            type: GraphQLNonNull(Year(i18n)),
            description: i18n._(
              t`The year in which the returned data is relevant to.`,
            ),
          },
        },
        type: periodType(i18n),
        resolve: async (
          { _id, _key, domain },
          __,
          {
            userId,
            loaders: { dmarcReportLoader },
            auth: { checkDomainOwnership, userRequired, tokenize },
          },
          info,
        ) => {
          await userRequired()
          const permitted = await checkDomainOwnership({
            domainId: _id,
          })

          if (!permitted) {
            console.warn(
              `User: ${userId} attempted to access dmarc report period data for ${_key}, but does not belong to an org with ownership.`,
            )
            throw new Error(
              i18n._(
                t`Unable to retrieve dmarc report information for: ${domain}`,
              ),
            )
          }

          const {
            data: { dmarcSummaryByPeriod },
          } = await dmarcReportLoader({ info, domain, userId, tokenize })
          return dmarcSummaryByPeriod
        },
      },
      yearlyDmarcSummaries: {
        description: 'Yearly summarized DMARC aggregate reports.',
        type: new GraphQLList(periodType(i18n)),
        resolve: async (
          { _id, _key, domain },
          __,
          {
            userId,
            loaders: { dmarcReportLoader },
            auth: { checkDomainOwnership, userRequired, tokenize },
          },
          info,
        ) => {
          await userRequired()
          const permitted = await checkDomainOwnership({
            domainId: _id,
          })

          if (!permitted) {
            console.warn(
              `User: ${userId} attempted to access dmarc report period data for ${_key}, but does not belong to an org with ownership.`,
            )
            throw new Error(
              i18n._(
                t`Unable to retrieve dmarc report information for: ${domain}`,
              ),
            )
          }

          const {
            data: { yearlyDmarcSummaries },
          } = await dmarcReportLoader({ info, domain, userId, tokenize })
          return yearlyDmarcSummaries
        },
      },
    }),
    interfaces: [nodeInterface],
    description: i18n._(
      t`Domain object containing information for a given domain.`,
    ),
  })

const domainConnection = (i18n) =>
  connectionDefinitions({
    name: 'Domain',
    nodeType: domainType(i18n),
  })

const emailScanType = (i18n) =>
  new GraphQLObjectType({
    name: 'EmailScan',
    fields: () => ({
      domain: {
        type: domainType,
        description: i18n._(t`The domain the scan was ran on.`),
        resolve: async ({ _key }, _, { loaders: { domainLoaderByKey } }) => {
          const domain = await domainLoaderByKey.load(_key)
          domain.id = domain._key
          return domain
        },
      },
      dkim: {
        type: dkimConnection(i18n).connectionType,
        args: {
          starDate: {
            type: GraphQLDateTime,
            description: i18n._(t`Start date for date filter.`),
          },
          endDate: {
            type: GraphQLDateTime,
            description: i18n._(t`End date for date filter.`),
          },
          ...connectionArgs,
        },
        description: i18n._(
          t`DomainKeys Identified Mail (DKIM) Signatures scan results.`,
        ),
        resolve: async (
          { _id },
          args,
          { loaders: { dkimLoaderConnectionsByDomainId } },
        ) => {
          const dkim = await dkimLoaderConnectionsByDomainId({
            domainId: _id,
            ...args,
          })
          return dkim
        },
      },
      dmarc: {
        type: dmarcConnection(i18n).connectionType,
        args: {
          starDate: {
            type: GraphQLDateTime,
            description: i18n._(t`Start date for date filter.`),
          },
          endDate: {
            type: GraphQLDateTime,
            description: i18n._(t`End date for date filter.`),
          },
          ...connectionArgs,
        },
        description: i18n._(
          t`Domain-based Message Authentication, Reporting, and Conformance (DMARC) scan results.`,
        ),
        resolve: async (
          { _id },
          args,
          { loaders: { dmarcLoaderConnectionsByDomainId } },
        ) => {
          const dmarc = await dmarcLoaderConnectionsByDomainId({
            domainId: _id,
            ...args,
          })
          return dmarc
        },
      },
      spf: {
        type: spfConnection(i18n).connectionType,
        args: {
          starDate: {
            type: GraphQLDateTime,
            description: i18n._(t`Start date for date filter.`),
          },
          endDate: {
            type: GraphQLDateTime,
            description: i18n._(t`End date for date filter.`),
          },
          ...connectionArgs,
        },
        description: i18n._(t`Sender Policy Framework (SPF) scan results.`),
        resolve: async (
          { _id },
          args,
          { loaders: { spfLoaderConnectionsByDomainId } },
        ) => {
          const spf = await spfLoaderConnectionsByDomainId({
            domainId: _id,
            ...args,
          })
          return spf
        },
      },
    }),
    description: i18n._(
      t`Results of DKIM, DMARC, and SPF scans on the given domain.`,
    ),
  })

const dkimType = (i18n) =>
  new GraphQLObjectType({
    name: 'DKIM',
    fields: () => ({
      id: globalIdField('dkim'),
      domain: {
        type: domainType(i18n),
        description: i18n._(t`The domain the scan was ran on.`),
        resolve: async (
          { domainId },
          _,
          { loaders: { domainLoaderByKey } },
        ) => {
          const domainKey = domainId.split('/')[1]
          const domain = await domainLoaderByKey.load(domainKey)
          domain.id = domain._key
          return domain
        },
      },
      timestamp: {
        type: GraphQLDateTime,
        description: i18n._(t`The time when the scan was initiated.`),
        resolve: ({ timestamp }) => timestamp,
      },
      results: {
        type: dkimResultsConnection(i18n).connectionType,
        args: {
          ...connectionArgs,
        },
        description: i18n._(
          t`Individual scans results for each dkim selector.`,
        ),
        resolve: async (
          { _id },
          args,
          { loaders: { dkimResultsLoaderConnectionByDkimId } },
        ) => {
          const dkimResults = await dkimResultsLoaderConnectionByDkimId({
            dkimId: _id,
            ...args,
          })
          return dkimResults
        },
      },
    }),
    interfaces: [nodeInterface],
    description: i18n._(t`DomainKeys Identified Mail (DKIM) permits a person, role, or
    organization that owns the signing domain to claim some
    responsibility for a message by associating the domain with the
    message.  This can be an author's organization, an operational relay,
    or one of their agents.`),
  })

const dkimConnection = (i18n) =>
  connectionDefinitions({
    name: 'DKIM',
    nodeType: dkimType(i18n),
  })

const dkimResultsType = (i18n) =>
  new GraphQLObjectType({
    name: 'DKIMResult',
    fields: () => ({
      id: globalIdField('dkimResult'),
      dkim: {
        type: dkimType(i18n),
        description: i18n._(
          t`The dkim scan information that this result belongs to.`,
        ),
        resolve: async ({ dkimId }, _, { loaders: { dkimLoaderByKey } }) => {
          const dkimKey = dkimId.split('/')[1]
          const dkim = await dkimLoaderByKey.load(dkimKey)
          dkim.id = dkim._key
          return dkim
        },
      },
      selector: {
        type: TranslatedString(i18n),
        description: i18n._(t`The selector the scan was ran on.`),
        resolve: ({ selector }) => selector,
      },
      record: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`DKIM record retrieved during the scan of the domain.`,
        ),
        resolve: ({ record }) => record,
      },
      keyLength: {
        type: TranslatedString(i18n),
        description: i18n._(t`Size of the Public Key in bits`),
        resolve: ({ keyLength }) => keyLength,
      },
      dkimGuidanceTags: {
        type: new GraphQLList(TranslatedString(i18n)),
        description: i18n._(t`Key tags found during scan.`),
        resolve: ({ dkimGuidanceTags }) => dkimGuidanceTags,
      },
    }),
    interfaces: [nodeInterface],
    description: i18n._(
      t`Individual scans results for the given dkim selector.`,
    ),
  })

const dkimResultsConnection = (i18n) =>
  connectionDefinitions({
    name: 'DKIMResult',
    nodeType: dkimResultsType(i18n),
  })

const dmarcType = (i18n) =>
  new GraphQLObjectType({
    name: 'DMARC',
    fields: () => ({
      id: globalIdField('dmarc'),
      domain: {
        type: domainType(i18n),
        description: i18n._(t`The domain the scan was ran on.`),
        resolve: async (
          { domainId },
          _,
          { loaders: { domainLoaderByKey } },
        ) => {
          const domainKey = domainId.split('/')[1]
          const domain = await domainLoaderByKey.load(domainKey)
          domain.id = domain._key
          return domain
        },
      },
      timestamp: {
        type: GraphQLDateTime,
        description: i18n._(t`The time when the scan was initiated.`),
        resolve: ({ timestamp }) => timestamp,
      },
      dmarcPhase: {
        type: TranslatedInt(i18n),
        description: i18n._(t`DMARC phase found during scan.`),
        resolve: ({ dmarcPhase }) => dmarcPhase,
      },
      record: {
        type: TranslatedString(i18n),
        description: i18n._(t`DMARC record retrieved during scan.`),
        resolve: ({ record }) => record,
      },
      pPolicy: {
        type: TranslatedString(i18n),
        description: i18n._(t`The requested policy you wish mailbox providers to apply
            when your email fails DMARC authentication and alignment checks.`),
        resolve: ({ pPolicy }) => pPolicy,
      },
      spPolicy: {
        type: TranslatedString(i18n),
        description: i18n._(t`This tag is used to indicate a requested policy for all
            subdomains where mail is failing the DMARC authentication and alignment checks.`),
        resolve: ({ spPolicy }) => spPolicy,
      },
      pct: {
        type: TranslatedInt(i18n),
        description: i18n._(
          t`The percentage of messages to which the DMARC policy is to be applied.`,
        ),
        resolve: ({ pct }) => pct,
      },
      dmarcGuidanceTags: {
        type: GraphQLList(TranslatedString(i18n)),
        description: i18n._(t`Key tags found during DMARC Scan.`),
        resolve: ({ dmarcGuidanceTags }) => dmarcGuidanceTags,
      },
    }),
    interfaces: [nodeInterface],
    description: i18n._(t`Domain-based Message Authentication, Reporting, and Conformance
    (DMARC) is a scalable mechanism by which a mail-originating
    organization can express domain-level policies and preferences for
    message validation, disposition, and reporting, that a mail-receiving
    organization can use to improve mail handling.`),
  })

const dmarcConnection = (i18n) =>
  connectionDefinitions({
    name: 'DMARC',
    nodeType: dmarcType(i18n),
  })

const spfType = (i18n) =>
  new GraphQLObjectType({
    name: 'SPF',
    fields: () => ({
      id: globalIdField('spf'),
      domain: {
        type: domainType(i18n),
        description: i18n._(t`The domain the scan was ran on.`),
        resolve: async (
          { domainId },
          _,
          { loaders: { domainLoaderByKey } },
        ) => {
          const domainKey = domainId.split('/')[1]
          const domain = await domainLoaderByKey.load(domainKey)
          domain.id = domain._key
          return domain
        },
      },
      timestamp: {
        type: GraphQLDateTime,
        description: i18n._(t`The time the scan was initiated.`),
        resolve: ({ timestamp }) => timestamp,
      },
      lookups: {
        type: TranslatedInt(i18n),
        description: i18n._(t`The amount of DNS lookups.`),
        resolve: ({ lookups }) => lookups,
      },
      record: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`SPF record retrieved during the scan of the given domain.`,
        ),
        resolve: ({ record }) => record,
      },
      spfDefault: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`Instruction of what a recipient should do if there is not a match to your SPF record.`,
        ),
        resolve: ({ spfDefault }) => spfDefault,
      },
      spfGuidanceTags: {
        type: GraphQLList(TranslatedString(i18n)),
        description: i18n._(t`Key tags found during scan.`),
        resolve: ({ spfGuidanceTags }) => spfGuidanceTags,
      },
    }),
    interfaces: [nodeInterface],
    description: i18n._(t`Email on the Internet can be forged in a number of ways.  In
  particular, existing protocols place no restriction on what a sending
  host can use as the "MAIL FROM" of a message or the domain given on
  the SMTP HELO/EHLO commands.  Version 1 of the Sender Policy Framework (SPF)
  protocol is where ADministrative Management Domains (ADMDs) can explicitly
  authorize the hosts that are allowed to use their domain names, and a
  receiving host can check such authorization.`),
  })

const spfConnection = (i18n) =>
  connectionDefinitions({
    name: 'SPF',
    nodeType: spfType(i18n),
  })

const webScanType = (i18n) =>
  new GraphQLObjectType({
    name: 'WebScan',
    fields: () => ({
      id: globalIdField('web-scan'),
      domain: {
        type: domainType(i18n),
        description: i18n._(t`The domain the scan was ran on.`),
        resolve: async ({ _key }, _, { loaders: { domainLoaderByKey } }) => {
          const domain = await domainLoaderByKey.load(_key)
          domain.id = domain._key
          return domain
        },
      },
      https: {
        type: httpsConnection(i18n).connectionType,
        args: {
          starDate: {
            type: GraphQLDateTime,
            description: i18n._(t`Start date for date filter.`),
          },
          endDate: {
            type: GraphQLDateTime,
            description: i18n._(t`End date for date filter.`),
          },
          ...connectionArgs,
        },
        description: i18n._(
          t`Hyper Text Transfer Protocol Secure scan results.`,
        ),
        resolve: async (
          { _id },
          args,
          { loaders: { httpsLoaderConnectionsByDomainId } },
        ) => {
          const https = await httpsLoaderConnectionsByDomainId({
            domainId: _id,
            ...args,
          })
          return https
        },
      },
      ssl: {
        type: sslConnection(i18n).connectionType,
        args: {
          starDate: {
            type: GraphQLDateTime,
            description: i18n._(t`Start date for date filter.`),
          },
          endDate: {
            type: GraphQLDateTime,
            description: i18n._(t`End date for date filter.`),
          },
          ...connectionArgs,
        },
        description: i18n._(t`Secure Socket Layer scan results.`),
        resolve: async (
          { _id },
          args,
          { loaders: { sslLoaderConnectionsByDomainId } },
        ) => {
          const ssl = await sslLoaderConnectionsByDomainId({
            domainId: _id,
            ...args,
          })
          return ssl
        },
      },
    }),
    description: i18n._(t`Results of HTTPS, and SSL scan on the given domain.`),
  })

const httpsType = (i18n) =>
  new GraphQLObjectType({
    name: 'HTTPS',
    fields: () => ({
      id: globalIdField('https'),
      domain: {
        type: domainType(i18n),
        description: i18n._(t`The domain the scan was ran on.`),
        resolve: async (
          { domainId },
          _,
          { loaders: { domainLoaderByKey } },
        ) => {
          const domainKey = domainId.split('/')[1]
          const domain = await domainLoaderByKey.load(domainKey)
          domain.id = domain._key
          return domain
        },
      },
      timestamp: {
        type: GraphQLDateTime,
        description: i18n._(t`The time the scan was initiated.`),
        resolve: ({ timestamp }) => timestamp,
      },
      implementation: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`State of the HTTPS implementation on the server and any issues therein.`,
        ),
        resolve: ({ implementation }) => implementation,
      },
      enforced: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`Degree to which HTTPS is enforced on the server based on behaviour.`,
        ),
        resolve: ({ enforced }) => enforced,
      },
      hsts: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`Presence and completeness of HSTS implementation.`,
        ),
        resolve: ({ hsts }) => hsts,
      },
      hstsAge: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`Denotes how long the domain should only be accessed using HTTPS`,
        ),
        resolve: ({ hstsAge }) => hstsAge,
      },
      preloaded: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`Denotes whether the domain has been submitted and included within HSTS preload list.`,
        ),
        resolve: ({ preloaded }) => preloaded,
      },
      httpsGuidanceTags: {
        type: GraphQLList(TranslatedString(i18n)),
        description: i18n._(t`Key tags found during scan.`),
        resolve: ({ httpsGuidanceTags }) => httpsGuidanceTags,
      },
    }),
    interfaces: [nodeInterface],
    description: i18n._(t`Hyper Text Transfer Protocol Secure scan results.`),
  })

const httpsConnection = (i18n) =>
  connectionDefinitions({
    name: 'HTTPS',
    nodeType: httpsType(i18n),
  })

const sslType = (i18n) =>
  new GraphQLObjectType({
    name: 'SSL',
    fields: () => ({
      id: globalIdField('ssl'),
      domain: {
        type: domainType(i18n),
        description: i18n._(t`The domain the scan was ran on.`),
        resolve: async (
          { domainId },
          _,
          { loaders: { domainLoaderByKey } },
        ) => {
          const domainKey = domainId.split('/')[1]
          const domain = await domainLoaderByKey.load(domainKey)
          domain.id = domain._key
          return domain
        },
      },
      timestamp: {
        type: GraphQLDateTime,
        description: i18n._(t`The time when the scan was initiated.`),
        resolve: ({ timestamp }) => timestamp,
      },
      sslGuidanceTags: {
        type: GraphQLList(TranslatedString(i18n)),
        description: i18n._(t`Key tags found during scan.`),
        resolve: ({ sslGuidanceTags }) => sslGuidanceTags,
      },
    }),
    interfaces: [nodeInterface],
    description: i18n._(t`Secure Socket Layer scan results.`),
  })

const sslConnection = (i18n) =>
  connectionDefinitions({
    name: 'SSL',
    nodeType: sslType(i18n),
  })

/* End domain related objects */

const organizationType = (i18n) =>
  new GraphQLObjectType({
    name: 'Organization',
    fields: () => ({
      id: globalIdField('organizations'),
      acronym: {
        type: Acronym(i18n),
        description: i18n._(t`The organizations acronym.`),
        resolve: ({ acronym }) => acronym,
      },
      name: {
        type: TranslatedString(i18n),
        description: i18n._(t`The full name of the organization.`),
        resolve: ({ name }) => name,
      },
      slug: {
        type: Slug(i18n),
        description: i18n._(t`Slugified name of the organization.`),
        resolve: ({ slug }) => slug,
      },
      zone: {
        type: TranslatedString(i18n),
        description: i18n._(t`The zone which the organization belongs to.`),
        resolve: ({ zone }) => zone,
      },
      sector: {
        type: TranslatedString(i18n),
        description: i18n._(t`The sector which the organization belongs to.`),
        resolve: ({ sector }) => sector,
      },
      country: {
        type: TranslatedString(i18n),
        description: i18n._(t`The country in which the organization resides.`),
        resolve: ({ country }) => country,
      },
      province: {
        type: TranslatedString(i18n),
        description: i18n._(t`The province in which the organization resides.`),
        resolve: ({ province }) => province,
      },
      city: {
        type: TranslatedString(i18n),
        description: i18n._(t`The city in which the organization resides.`),
        resolve: ({ city }) => city,
      },
      blueCheck: {
        type: TranslatedBoolean(i18n),
        description: i18n._(
          t`Wether the organization is a verified organization.`,
        ),
        resolve: ({ blueCheck }) => blueCheck,
      },
      domainCount: {
        type: TranslatedInt(i18n),
        description: i18n._(
          t`The number of domains associated with this organization.`,
        ),
        resolve: ({ domainCount }) => domainCount,
      },
      domains: {
        type: domainConnection(i18n).connectionType,
        description: i18n._(
          t`The domains which are associated with this organization.`,
        ),
        args: connectionArgs,
        resolve: async (
          { _id },
          args,
          { loaders: { domainLoaderConnectionsByOrgId } },
        ) => {
          const connections = await domainLoaderConnectionsByOrgId({
            orgId: _id,
            ...args,
          })
          return connections
        },
      },
      affiliations: {
        type: userAffiliationsConnection.connectionType,
        description: 'Organization affiliations to various users.',
        args: connectionArgs,
        resolve: async (
          { _id },
          args,
          { loaders: { affiliationLoaderByOrgId } },
        ) => {
          const affiliations = await affiliationLoaderByOrgId({
            orgId: _id,
            ...args,
          })
          return affiliations
        },
      },
    }),
    interfaces: [nodeInterface],
    description: i18n._(
      t`Organization object containing information for a given Organization.`,
    ),
  })

const organizationConnection = (i18n) =>
  connectionDefinitions({
    name: 'Organization',
    nodeType: organizationType(i18n),
  })

const userType = (i18n) =>
  new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: globalIdField('users'),
      userName: {
        type: EmailAddress(i18n),
        description: i18n._(t`Users email address.`),
        resolve: ({ userName }) => userName,
      },
      displayName: {
        type: TranslatedString(i18n),
        description: i18n._(t`Name displayed to other users.`),
        resolve: ({ displayName }) => displayName,
      },
      preferredLang: {
        type: LanguageEnums(i18n),
        description: i18n._(t`Users preferred language.`),
        resolve: ({ preferredLang }) => preferredLang,
      },
      tfaValidated: {
        type: TranslatedBoolean(i18n),
        description: i18n._(
          t`Has the user completed two factor authentication.`,
        ),
        resolve: ({ tfaValidated }) => tfaValidated,
      },
      emailValidated: {
        type: TranslatedBoolean(i18n),
        description: i18n._(t`Has the user email verified their account.`),
        resolve: ({ emailValidated }) => emailValidated,
      },
      affiliations: {
        type: userAffiliationsConnection(i18n).connectionType,
        description: i18n._(t`Users affiliations to various organizations.`),
        args: connectionArgs,
        resolve: async (
          { _id },
          args,
          { loaders: { affiliationLoaderByUserId } },
        ) => {
          const affiliations = await affiliationLoaderByUserId({
            uId: _id,
            ...args,
          })
          return affiliations
        },
      },
    }),
    interfaces: [nodeInterface],
    description: i18n._(t`This object can be queried to retrieve the current logged in users
    information or if the user is an org or super admin they can query a user
    by their user name`),
  })

const userConnection = (i18n) =>
  connectionDefinitions({
    name: 'User',
    nodeType: userType(i18n),
  })

const userAffiliationsType = (i18n) =>
  new GraphQLObjectType({
    name: 'UserAffiliations',
    fields: () => ({
      id: globalIdField('affiliations'),
      userId: {
        type: TranslatedID(i18n),
        description: i18n._(t`Affiliated user's ID`),
        resolve: async ({ userId }) => userId,
      },
      permission: {
        type: RoleEnums(i18n),
        description: i18n._(t`User's level of access to a given organization.`),
        resolve: async ({ permission }) => permission,
      },
      user: {
        type: userType(i18n),
        description: i18n._(t`The affiliated users information.`),
        resolve: async (
          { userKey },
          _args,
          { loaders: { userLoaderByKey } },
        ) => {
          const user = await userLoaderByKey.load(userKey)
          return user
        },
      },
      organization: {
        type: organizationType(i18n),
        description: i18n._(t`The affiliated organizations information.`),
        resolve: async ({ orgKey }, _args, { loaders: { orgLoaderByKey } }) => {
          const org = await orgLoaderByKey.load(orgKey)
          return org
        },
      },
    }),
    interfaces: [nodeInterface],
    description: i18n._(
      t`User Affiliations containing the permission level for the given organization, the users information, and the organizations information.`,
    ),
  })

const userAffiliationsConnection = (i18n) =>
  connectionDefinitions({
    name: 'UserAffiliations',
    nodeType: userAffiliationsType(i18n),
  })

module.exports = {
  domainType,
  domainConnection,
  organizationType,
  organizationConnection,
  userType,
  userConnection,
  userAffiliationsType,
  userAffiliationsConnection,
}
