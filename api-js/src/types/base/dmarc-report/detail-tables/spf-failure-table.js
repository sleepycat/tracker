const { GraphQLObjectType } = require('graphql')
const { connectionDefinitions } = require('graphql-relay')
const { t } = require('@lingui/macro')
const {
  TranslatedID,
  TranslatedString,
  TranslatedBoolean,
  TranslatedInt,
} = require('../../../../scalars')

const spfFailureTableType = (i18n) =>
  new GraphQLObjectType({
    name: 'SpfFailureTable',
    description: i18n._(
      t`This table contains the data fields for senders who are in the SPF fail category.`,
    ),
    fields: () => ({
      id: {
        type: TranslatedID(i18n),
        description: i18n._(t`The ID of the object`),
        resolve: ({ id }) => id,
      },
      dnsHost: {
        type: TranslatedString(i18n),
        description: i18n._(t`Host from reverse DNS of source IP address.`),
        resolve: ({ dnsHost }) => dnsHost,
      },
      envelopeFrom: {
        type: TranslatedString(i18n),
        description: i18n._(t`Domain from SMTP banner message.`),
        resolve: ({ envelopeFrom }) => envelopeFrom,
      },
      guidance: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`Guidance for any issues that were found from the report.`,
        ),
        resolve: ({ guidance }) => guidance,
      },
      headerFrom: {
        type: TranslatedString(i18n),
        description: i18n._(t`The address/domain used in the "From" field.`),
        resolve: ({ headerFrom }) => headerFrom,
      },
      sourceIpAddress: {
        type: TranslatedString(i18n),
        description: i18n._(t`IP address of sending server.`),
        resolve: ({ sourceIpAddress }) => sourceIpAddress,
      },
      spfAligned: {
        type: TranslatedBoolean(i18n),
        description: i18n._(t`Is SPF aligned.`),
        resolve: ({ spfAligned }) => spfAligned,
      },
      spfDomains: {
        type: TranslatedString(i18n),
        description: i18n._(t`Domains used for SPF validation.`),
        resolve: ({ spfDomains }) => spfDomains,
      },
      spfResults: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`The results of DKIM verification of the message. Can be pass, fail, neutral, soft-fail, temp-error, or perm-error.`,
        ),
        resolve: ({ spfResults }) => spfResults,
      },
      totalMessages: {
        type: TranslatedInt(i18n),
        description: i18n._(t`Total messages from this sender.`),
        resolve: ({ totalMessages }) => totalMessages,
      },
    }),
  })

const spfFailureConnection = (i18n) =>
  connectionDefinitions({
    name: 'SpfFailureTable',
    nodeType: spfFailureTableType(i18n),
  })

module.exports = {
  spfFailureConnection,
  spfFailureTableType,
}
