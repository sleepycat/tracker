import { ArangoTools, dbNameFromFile } from 'arango-tools'
import { graphql, GraphQLSchema, GraphQLError } from 'graphql'
import { toGlobalId } from 'graphql-relay'
import { setupI18n } from '@lingui/core'

import englishMessages from '../../../locale/en/messages'
import frenchMessages from '../../../locale/fr/messages'
import { makeMigrations } from '../../../../migrations'
import { createQuerySchema } from '../../../query'
import { createMutationSchema } from '../../../mutation'
import { cleanseInput } from '../../../validators'
import { verifiedOrgLoaderConnectionsByDomainId } from '../../../verified-organizations/loaders'
import { verifiedDomainLoaderByDomain } from '../../loaders'

const { DB_PASS: rootPass, DB_URL: url } = process.env

describe('given findVerifiedDomainByDomain query', () => {
  let query, drop, truncate, migrate, schema, collections, domain, org, i18n

  beforeAll(async () => {
    // Create GQL Schema
    schema = new GraphQLSchema({
      query: createQuerySchema(),
      mutation: createMutationSchema(),
    })
    // Generate DB Items
    ;({ migrate } = await ArangoTools({ rootPass, url }))
    ;({ query, drop, truncate, collections } = await migrate(
      makeMigrations({ databaseName: dbNameFromFile(__filename), rootPass }),
    ))
    i18n = setupI18n({
      locale: 'en',
      localeData: {
        en: { plurals: {} },
        fr: { plurals: {} },
      },
      locales: ['en', 'fr'],
      messages: {
        en: englishMessages.messages,
        fr: frenchMessages.messages,
      },
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
    await truncate()
    consoleOutput = []
    org = await collections.organizations.save({
      verified: true,
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
    domain = await collections.domains.save({
      domain: 'test.gc.ca',
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
      _to: domain._id,
      _from: org._id,
    })
  })

  afterAll(async () => {
    await drop()
  })

  describe('given successful domain retrieval', () => {
    it('returns domain', async () => {
      const response = await graphql(
        schema,
        `
          query {
            findVerifiedDomainByDomain(domain: "test.gc.ca") {
              id
            }
          }
        `,
        null,
        {
          i18n,
          query: query,
          validators: {
            cleanseInput,
          },
          loaders: {
            verifiedDomainLoaderByDomain: verifiedDomainLoaderByDomain(query),
            verifiedOrgLoaderConnectionsByDomainId: verifiedOrgLoaderConnectionsByDomainId(
              query,
              'en',
              cleanseInput,
            ),
          },
        },
      )

      const expectedResponse = {
        data: {
          findVerifiedDomainByDomain: {
            id: toGlobalId('verifiedDomains', domain._key),
          },
        },
      }
      expect(response).toEqual(expectedResponse)
    })
  })

  describe('users language is set to english', () => {
    beforeAll(() => {
      i18n = setupI18n({
        locale: 'en',
        localeData: {
          en: { plurals: {} },
          fr: { plurals: {} },
        },
        locales: ['en', 'fr'],
        messages: {
          en: englishMessages.messages,
          fr: frenchMessages.messages,
        },
      })
    })
    describe('given unsuccessful domain retrieval', () => {
      describe('domain cannot be found', () => {
        it('returns an appropriate error message', async () => {
          const response = await graphql(
            schema,
            `
              query {
                findVerifiedDomainByDomain(domain: "not-test.gc.ca") {
                  id
                }
              }
            `,
            null,
            {
              i18n,
              query: query,
              validators: {
                cleanseInput,
              },
              loaders: {
                verifiedDomainLoaderByDomain: verifiedDomainLoaderByDomain(
                  query,
                ),
                verifiedOrgLoaderConnectionsByDomainId: verifiedOrgLoaderConnectionsByDomainId(
                  query,
                  'en',
                  cleanseInput,
                ),
              },
            },
          )

          const error = [
            new GraphQLError(
              `No verified domain with the provided domain could be found.`,
            ),
          ]

          expect(response.errors).toEqual(error)
        })
      })
    })
  })
  describe('users language is set to french', () => {
    beforeAll(() => {
      i18n = setupI18n({
        locale: 'fr',
        localeData: {
          en: { plurals: {} },
          fr: { plurals: {} },
        },
        locales: ['en', 'fr'],
        messages: {
          en: englishMessages.messages,
          fr: frenchMessages.messages,
        },
      })
    })
    describe('given unsuccessful domain retrieval', () => {
      describe('domain cannot be found', () => {
        it('returns an appropriate error message', async () => {
          const response = await graphql(
            schema,
            `
              query {
                findVerifiedDomainByDomain(domain: "not-test.gc.ca") {
                  id
                }
              }
            `,
            null,
            {
              i18n,
              query: query,
              validators: {
                cleanseInput,
              },
              loaders: {
                verifiedDomainLoaderByDomain: verifiedDomainLoaderByDomain(
                  query,
                ),
                verifiedOrgLoaderConnectionsByDomainId: verifiedOrgLoaderConnectionsByDomainId(
                  query,
                  'en',
                  cleanseInput,
                ),
              },
            },
          )

          const error = [new GraphQLError(`todo`)]

          expect(response.errors).toEqual(error)
        })
      })
    })
  })
})
