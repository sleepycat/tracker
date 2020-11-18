const { ArangoTools, dbNameFromFile } = require('arango-tools')
const bcrypt = require('bcrypt')
const { graphql, GraphQLSchema } = require('graphql')
const { makeMigrations } = require('../../../../migrations')
const { createQuerySchema } = require('../../../queries')
const { createMutationSchema } = require('../../../mutations')
const { cleanseInput } = require('../../../validators')
const { tokenize } = require('../../../auth')
const {
  orgLoaderConnectionArgsByDomainId,
  domainLoaderConnectionsByUserId,
  domainLoaderByKey,
  userLoaderByUserName,
} = require('../../../loaders')
const { DB_PASS: rootPass, DB_URL: url } = process.env

describe('given the domain status object', () => {
  let query, drop, truncate, migrate, schema, collections, org, i18n

  beforeAll(async () => {
    // Create GQL Schema
    schema = new GraphQLSchema({
      query: createQuerySchema(),
      mutation: createMutationSchema(),
    })
  })

  let consoleOutput = []
  const mockedInfo = (output) => consoleOutput.push(output)
  const mockedWarn = (output) => consoleOutput.push(output)
  const mockedError = (output) => consoleOutput.push(output)

  beforeEach(async () => {
    console.info = mockedInfo
    console.warn = mockedWarn
    console.error = mockedError
    // Generate DB Items
    ;({ migrate } = await ArangoTools({ rootPass, url }))
    ;({ query, drop, truncate, collections } = await migrate(
      makeMigrations({ databaseName: dbNameFromFile(__filename), rootPass }),
    ))
    await truncate()
    await graphql(
      schema,
      `
        mutation {
          signUp(
            input: {
              displayName: "Test Account"
              userName: "test.account@istio.actually.exists"
              password: "testpassword123"
              confirmPassword: "testpassword123"
              preferredLang: FRENCH
            }
          ) {
            authResult {
              user {
                id
              }
            }
          }
        }
      `,
      null,
      {
        query,
        auth: {
          bcrypt,
          tokenize,
        },
        validators: {
          cleanseInput,
        },
        loaders: {
          userLoaderByUserName: userLoaderByUserName(query),
        },
      },
    )
    consoleOutput = []

    org = await collections.organizations.save({
      orgDetails: {
        en: {
          slug: 'treasury-board-secretariat',
          acronym: 'TBS',
          name: 'Treasury Board of Canada Secretariat',
          zone: 'FED',
          sector: 'TBS',
          country: 'Canada',
          province: 'Ontario',
          city: 'Ottawa',
        },
        fr: {
          slug: 'secretariat-conseil-tresor',
          acronym: 'SCT',
          name: 'Secrétariat du Conseil Trésor du Canada',
          zone: 'FED',
          sector: 'TBS',
          country: 'Canada',
          province: 'Ontario',
          city: 'Ottawa',
        },
      },
    })
  })

  afterEach(async () => {
    await drop()
  })

  describe('given successful retrieval of domain status', () => {
    let user, domainOne, domainTwo
    beforeEach(async () => {
      const userCursor = await query`
        FOR user IN users
          FILTER user.userName == "test.account@istio.actually.exists"
          RETURN user
      `
      user = await userCursor.next()
      await collections.affiliations.save({
        _from: org._id,
        _to: user._id,
        permission: 'user',
      })
      domainOne = await collections.domains.save({
        domain: 'test1.gc.ca',
        lastRan: null,
        selectors: ['selector1._domainkey', 'selector2._domainkey'],
        status: {
          dkim: 'pass',
          dmarc: 'pass',
          https: 'info',
          spf: 'fail',
          ssl: 'fail',
        },
      })
      domainTwo = await collections.domains.save({
        domain: 'test2.gc.ca',
        lastRan: null,
        selectors: ['selector1._domainkey', 'selector2._domainkey'],
        status: {
          dkim: 'pass',
          dmarc: 'pass',
          https: 'info',
          spf: 'fail',
          ssl: 'fail',
        },
      })
      await collections.claims.save({
        _to: domainOne._id,
        _from: org._id,
      })
      await collections.claims.save({
        _to: domainTwo._id,
        _from: org._id,
      })
    })
    afterEach(async () => {
      await query`
        LET userEdges = (FOR v, e IN 1..1 ANY ${org._id} affiliations RETURN { edgeKey: e._key, userId: e._to })
        LET removeUserEdges = (FOR userEdge IN userEdges REMOVE userEdge.edgeKey IN affiliations)
        RETURN true
      `
      await query`
        FOR affiliation IN affiliations
          REMOVE affiliation IN affiliations
      `
      await query`
        LET domainEdges = (FOR v, e IN 1..1 ANY ${org._id} claims RETURN { edgeKey: e._key, userId: e._to })
        LET removeDomainEdges = (FOR domainEdge IN domainEdges REMOVE domainEdge.edgeKey IN claims)
        RETURN true
      `
      await query`
        FOR claim IN claims
          REMOVE claim IN claims
      `
    })
    it('returns domains', async () => {
      const response = await graphql(
        schema,
        `
          query {
            findMyDomains(first: 5) {
              edges {
                node {
                  status {
                    dkim
                    dmarc
                    https
                    spf
                    ssl
                  }
                }
              }
            }
          }
        `,
        null,
        {
          i18n,
          userId: user._key,
          loaders: {
            domainLoaderByKey: domainLoaderByKey(query, user._key),
            domainLoaderConnectionsByUserId: domainLoaderConnectionsByUserId(
              query,
              user._key,
              cleanseInput,
            ),
            orgLoaderConnectionArgsByDomainId: orgLoaderConnectionArgsByDomainId(
              query,
              'en',
              user._key,
              cleanseInput,
            ),
          },
        },
      )

      const expectedResponse = {
        data: {
          findMyDomains: {
            edges: [
              {
                node: {
                  status: {
                    dkim: 'PASS',
                    dmarc: 'PASS',
                    https: 'INFO',
                    spf: 'FAIL',
                    ssl: 'FAIL',
                  },
                },
              },
              {
                node: {
                  status: {
                    dkim: 'PASS',
                    dmarc: 'PASS',
                    https: 'INFO',
                    spf: 'FAIL',
                    ssl: 'FAIL',
                  },
                },
              },
            ],
          },
        },
      }
      expect(response).toEqual(expectedResponse)
      expect(consoleOutput).toEqual([
        `User ${user._key} successfully retrieved their domains.`,
      ])
    })
  })
})