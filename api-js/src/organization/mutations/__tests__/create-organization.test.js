import { ArangoTools, dbNameFromFile } from 'arango-tools'
import bcrypt from 'bcryptjs'
import { graphql, GraphQLSchema, GraphQLError } from 'graphql'
import { toGlobalId } from 'graphql-relay'
import { setupI18n } from '@lingui/core'

import { makeMigrations } from '../../../../migrations'
import { createQuerySchema } from '../../../query'
import { createMutationSchema } from '../../../mutation'
import englishMessages from '../../../locale/en/messages'
import frenchMessages from '../../../locale/fr/messages'
import { cleanseInput, slugify } from '../../../validators'
import { tokenize, userRequired } from '../../../auth'
import { userLoaderByKey, userLoaderByUserName } from '../../../user/loaders'
import { orgLoaderBySlug } from '../../loaders'

const { DB_PASS: rootPass, DB_URL: url, SIGN_IN_KEY } = process.env

describe('create an organization', () => {
  let query, drop, truncate, migrate, schema, collections, transaction

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
    ;({ query, drop, truncate, collections, transaction } = await migrate(
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
  })

  afterEach(async () => {
    await drop()
  })

  describe('given a successful org creation', () => {
    describe('language is set to english', () => {
      it('returns the organizations information', async () => {
        const userCursor = await query`
          FOR user IN users
            FILTER user.userName == "test.account@istio.actually.exists"
            RETURN user
        `
        const user = await userCursor.next()

        const response = await graphql(
          schema,
          `
            mutation {
              createOrganization(
                input: {
                  acronymEN: "TBS"
                  acronymFR: "SCT"
                  nameEN: "Treasury Board of Canada Secretariat"
                  nameFR: "Secrétariat du Conseil Trésor du Canada"
                  zoneEN: "FED"
                  zoneFR: "FED"
                  sectorEN: "TBS"
                  sectorFR: "TBS"
                  countryEN: "Canada"
                  countryFR: "Canada"
                  provinceEN: "Ontario"
                  provinceFR: "Ontario"
                  cityEN: "Ottawa"
                  cityFR: "Ottawa"
                }
              ) {
                organization {
                  id
                  acronym
                  slug
                  name
                  zone
                  sector
                  country
                  province
                  city
                  verified
                }
              }
            }
          `,
          null,
          {
            request: {
              language: 'en',
            },
            query,
            collections,
            transaction,
            userKey: user._key,
            auth: {
              userRequired: userRequired({
                userKey: user._key,
                userLoaderByKey: userLoaderByKey(query),
              }),
            },
            loaders: {
              orgLoaderBySlug: orgLoaderBySlug(query, 'en'),
              userLoaderByKey: userLoaderByKey(query),
            },
            validators: {
              cleanseInput,
              slugify,
            },
          },
        )

        const orgCursor = await query`
          FOR org IN organizations
            FILTER (LOWER("treasury-board-of-canada-secretariat") == LOWER(TRANSLATE("en", org.orgDetails).slug))
            RETURN MERGE({ _id: org._id, _key: org._key, _rev: org._rev, verified: org.verified }, TRANSLATE("en", org.orgDetails))
        `

        const org = await orgCursor.next()

        const expectedResponse = {
          data: {
            createOrganization: {
              organization: {
                id: `${toGlobalId('organizations', org._key)}`,
                acronym: org.acronym,
                slug: org.slug,
                name: org.name,
                zone: org.zone,
                sector: org.sector,
                country: org.country,
                province: org.province,
                city: org.city,
                verified: org.verified,
              },
            },
          },
        }

        expect(response).toEqual(expectedResponse)
        expect(consoleOutput).toEqual([
          `User: ${user._key} successfully created a new organization: ${org.slug}`,
        ])
      })
    })
    describe('language is set to french', () => {
      it('returns the organizations information', async () => {
        const userCursor = await query`
          FOR user IN users
            FILTER user.userName == "test.account@istio.actually.exists"
            RETURN user
        `
        const user = await userCursor.next()

        const response = await graphql(
          schema,
          `
            mutation {
              createOrganization(
                input: {
                  acronymEN: "TBS"
                  acronymFR: "SCT"
                  nameEN: "Treasury Board of Canada Secretariat"
                  nameFR: "Secrétariat du Conseil Trésor du Canada"
                  zoneEN: "FED"
                  zoneFR: "FED"
                  sectorEN: "TBS"
                  sectorFR: "TBS"
                  countryEN: "Canada"
                  countryFR: "Canada"
                  provinceEN: "Ontario"
                  provinceFR: "Ontario"
                  cityEN: "Ottawa"
                  cityFR: "Ottawa"
                }
              ) {
                organization {
                  id
                  acronym
                  slug
                  name
                  zone
                  sector
                  country
                  province
                  city
                  verified
                }
              }
            }
          `,
          null,
          {
            request: {
              language: 'fr',
            },
            query,
            collections,
            transaction,
            userKey: user._key,
            auth: {
              userRequired: userRequired({
                userKey: user._key,
                userLoaderByKey: userLoaderByKey(query),
              }),
            },
            loaders: {
              orgLoaderBySlug: orgLoaderBySlug(query, 'fr'),
              userLoaderByKey: userLoaderByKey(query),
            },
            validators: {
              cleanseInput,
              slugify,
            },
          },
        )

        const orgCursor = await query`
          FOR org IN organizations
            FILTER (LOWER("secretariat-du-conseil-tresor-du-canada") == LOWER(TRANSLATE("fr", org.orgDetails).slug))
            RETURN MERGE({ _id: org._id, _key: org._key, _rev: org._rev, verified: org.verified }, TRANSLATE("fr", org.orgDetails))
        `

        const org = await orgCursor.next()

        const expectedResponse = {
          data: {
            createOrganization: {
              organization: {
                id: `${toGlobalId('organizations', org._key)}`,
                acronym: org.acronym,
                slug: org.slug,
                name: org.name,
                zone: org.zone,
                sector: org.sector,
                country: org.country,
                province: org.province,
                city: org.city,
                verified: org.verified,
              },
            },
          },
        }

        expect(response).toEqual(expectedResponse)
        expect(consoleOutput).toEqual([
          `User: ${user._key} successfully created a new organization: treasury-board-of-canada-secretariat`,
        ])
      })
    })
  })
  describe('given an unsuccessful org creation', () => {
    let i18n
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
      describe('organization already exists', () => {
        beforeEach(async () => {
          await collections.organizations.save({
            orgDetails: {
              en: {
                slug: 'treasury-board-of-canada-secretariat',
                acronym: 'TBS',
                name: 'Treasury Board of Canada Secretariat',
                zone: 'FED',
                sector: 'TBS',
                country: 'Canada',
                province: 'Ontario',
                city: 'Ottawa',
              },
              fr: {
                slug: 'secretariat-du-conseil-tresor-du-canada',
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
        it('returns an error', async () => {
          const userCursor = await query`
            FOR user IN users
              FILTER user.userName == "test.account@istio.actually.exists"
              RETURN user
          `
          const user = await userCursor.next()

          const response = await graphql(
            schema,
            `
              mutation {
                createOrganization(
                  input: {
                    acronymEN: "TBS"
                    acronymFR: "SCT"
                    nameEN: "Treasury Board of Canada Secretariat"
                    nameFR: "Secrétariat du Conseil Trésor du Canada"
                    zoneEN: "FED"
                    zoneFR: "FED"
                    sectorEN: "TBS"
                    sectorFR: "TBS"
                    countryEN: "Canada"
                    countryFR: "Canada"
                    provinceEN: "Ontario"
                    provinceFR: "Ontario"
                    cityEN: "Ottawa"
                    cityFR: "Ottawa"
                  }
                ) {
                  organization {
                    id
                    acronym
                    slug
                    name
                    zone
                    sector
                    country
                    province
                    city
                  }
                }
              }
            `,
            null,
            {
              i18n,
              request: {
                language: 'en',
              },
              query,
              collections,
              transaction,
              userKey: user._key,
              auth: {
                userRequired: userRequired({
                  userKey: user._key,
                  userLoaderByKey: userLoaderByKey(query),
                }),
              },
              loaders: {
                orgLoaderBySlug: orgLoaderBySlug(query, 'en'),
                userLoaderByKey: userLoaderByKey(query),
              },
              validators: {
                cleanseInput,
                slugify,
              },
            },
          )

          const error = [
            new GraphQLError(
              'Unable to create organization. Please try again.',
            ),
          ]

          expect(response.errors).toEqual(error)
          expect(consoleOutput).toEqual([
            `User: ${user._key} attempted to create an organization that already exists: treasury-board-of-canada-secretariat`,
          ])
        })
      })
      describe('transaction error occurs', () => {
        describe('when inserting organization', () => {
          it('returns an error', async () => {
            const userCursor = await query`
              FOR user IN users
                FILTER user.userName == "test.account@istio.actually.exists"
                RETURN user
            `
            const user = await userCursor.next()

            const orgLoader = orgLoaderBySlug(query, 'en')
            const userLoader = userLoaderByKey(query)

            query = jest
              .fn()
              .mockRejectedValue(new Error('Database error occurred.'))

            const response = await graphql(
              schema,
              `
                mutation {
                  createOrganization(
                    input: {
                      acronymEN: "TBS"
                      acronymFR: "SCT"
                      nameEN: "Treasury Board of Canada Secretariat"
                      nameFR: "Secrétariat du Conseil Trésor du Canada"
                      zoneEN: "FED"
                      zoneFR: "FED"
                      sectorEN: "TBS"
                      sectorFR: "TBS"
                      countryEN: "Canada"
                      countryFR: "Canada"
                      provinceEN: "Ontario"
                      provinceFR: "Ontario"
                      cityEN: "Ottawa"
                      cityFR: "Ottawa"
                    }
                  ) {
                    organization {
                      id
                      acronym
                      slug
                      name
                      zone
                      sector
                      country
                      province
                      city
                    }
                  }
                }
              `,
              null,
              {
                i18n,
                request: {
                  language: 'en',
                },
                query,
                collections,
                transaction,
                userKey: user._key,
                auth: {
                  userRequired: userRequired({
                    userKey: user._key,
                    userLoaderByKey: userLoader,
                  }),
                },
                loaders: {
                  orgLoaderBySlug: orgLoader,
                  userLoaderByKey: userLoader,
                },
                validators: {
                  cleanseInput,
                  slugify,
                },
              },
            )

            const error = [
              new GraphQLError(
                'Unable to create organization. Please try again.',
              ),
            ]

            expect(response.errors).toEqual(error)
            expect(consoleOutput).toEqual([
              `Transaction error occurred when user: ${user._key} was creating new organization treasury-board-of-canada-secretariat: Error: Database error occurred.`,
            ])
          })
        })
        describe('when inserting edge', () => {
          it('returns an error message', async () => {
            const userCursor = await query`
              FOR user IN users
                FILTER user.userName == "test.account@istio.actually.exists"
                RETURN user
            `
            const user = await userCursor.next()

            const orgLoader = orgLoaderBySlug(query, 'en')
            const userLoader = userLoaderByKey(query)

            query = jest
              .fn()
              .mockResolvedValueOnce({
                next() {
                  return 'test'
                },
              })
              .mockRejectedValue(new Error('Database error occurred.'))

            const response = await graphql(
              schema,
              `
                mutation {
                  createOrganization(
                    input: {
                      acronymEN: "TBS"
                      acronymFR: "SCT"
                      nameEN: "Treasury Board of Canada Secretariat"
                      nameFR: "Secrétariat du Conseil Trésor du Canada"
                      zoneEN: "FED"
                      zoneFR: "FED"
                      sectorEN: "TBS"
                      sectorFR: "TBS"
                      countryEN: "Canada"
                      countryFR: "Canada"
                      provinceEN: "Ontario"
                      provinceFR: "Ontario"
                      cityEN: "Ottawa"
                      cityFR: "Ottawa"
                    }
                  ) {
                    organization {
                      id
                      acronym
                      slug
                      name
                      zone
                      sector
                      country
                      province
                      city
                    }
                  }
                }
              `,
              null,
              {
                i18n,
                request: {
                  language: 'en',
                },
                query,
                collections,
                transaction,
                userKey: user._key,
                auth: {
                  userRequired: userRequired({
                    userKey: user._key,
                    userLoaderByKey: userLoader,
                  }),
                },
                loaders: {
                  orgLoaderBySlug: orgLoader,
                  userLoaderByKey: userLoader,
                },
                validators: {
                  cleanseInput,
                  slugify,
                },
              },
            )

            const error = [
              new GraphQLError(
                'Unable to create organization. Please try again.',
              ),
            ]

            expect(response.errors).toEqual(error)
            expect(consoleOutput).toEqual([
              `Transaction error occurred when inserting edge definition for user: ${user._key} to treasury-board-of-canada-secretariat: Error: Database error occurred.`,
            ])
          })
        })
        describe('when committing information to db', () => {
          it('returns an error message', async () => {
            const userCursor = await query`
              FOR user IN users
                FILTER user.userName == "test.account@istio.actually.exists"
                RETURN user
            `
            const user = await userCursor.next()

            const orgLoader = orgLoaderBySlug(query, 'en')
            const userLoader = userLoaderByKey(query)

            transaction = jest.fn().mockReturnValue({
              run() {
                return {
                  next() {
                    return { _id: 1 }
                  },
                }
              },
              commit() {
                throw new Error('Database error occurred.')
              },
            })

            const response = await graphql(
              schema,
              `
                mutation {
                  createOrganization(
                    input: {
                      acronymEN: "TBS"
                      acronymFR: "SCT"
                      nameEN: "Treasury Board of Canada Secretariat"
                      nameFR: "Secrétariat du Conseil Trésor du Canada"
                      zoneEN: "FED"
                      zoneFR: "FED"
                      sectorEN: "TBS"
                      sectorFR: "TBS"
                      countryEN: "Canada"
                      countryFR: "Canada"
                      provinceEN: "Ontario"
                      provinceFR: "Ontario"
                      cityEN: "Ottawa"
                      cityFR: "Ottawa"
                    }
                  ) {
                    organization {
                      id
                      acronym
                      slug
                      name
                      zone
                      sector
                      country
                      province
                      city
                    }
                  }
                }
              `,
              null,
              {
                i18n,
                request: {
                  language: 'en',
                },
                query,
                collections,
                transaction,
                userKey: user._key,
                auth: {
                  userRequired: userRequired({
                    userKey: user._key,
                    userLoaderByKey: userLoaderByKey(query),
                  }),
                },
                loaders: {
                  orgLoaderBySlug: orgLoader,
                  userLoaderByKey: userLoader,
                },
                validators: {
                  cleanseInput,
                  slugify,
                },
              },
            )

            const error = [
              new GraphQLError(
                'Unable to create organization. Please try again.',
              ),
            ]

            expect(response.errors).toEqual(error)
            expect(consoleOutput).toEqual([
              `Transaction error occurred when committing new organization: treasury-board-of-canada-secretariat for user: ${user._key} to db: Error: Database error occurred.`,
            ])
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
      describe('organization already exists', () => {
        beforeEach(async () => {
          await collections.organizations.save({
            orgDetails: {
              en: {
                slug: 'treasury-board-of-canada-secretariat',
                acronym: 'TBS',
                name: 'Treasury Board of Canada Secretariat',
                zone: 'FED',
                sector: 'TBS',
                country: 'Canada',
                province: 'Ontario',
                city: 'Ottawa',
              },
              fr: {
                slug: 'secretariat-du-conseil-tresor-du-canada',
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
        it('returns an error', async () => {
          const userCursor = await query`
            FOR user IN users
              FILTER user.userName == "test.account@istio.actually.exists"
              RETURN user
          `
          const user = await userCursor.next()

          const response = await graphql(
            schema,
            `
              mutation {
                createOrganization(
                  input: {
                    acronymEN: "TBS"
                    acronymFR: "SCT"
                    nameEN: "Treasury Board of Canada Secretariat"
                    nameFR: "Secrétariat du Conseil Trésor du Canada"
                    zoneEN: "FED"
                    zoneFR: "FED"
                    sectorEN: "TBS"
                    sectorFR: "TBS"
                    countryEN: "Canada"
                    countryFR: "Canada"
                    provinceEN: "Ontario"
                    provinceFR: "Ontario"
                    cityEN: "Ottawa"
                    cityFR: "Ottawa"
                  }
                ) {
                  organization {
                    id
                    acronym
                    slug
                    name
                    zone
                    sector
                    country
                    province
                    city
                  }
                }
              }
            `,
            null,
            {
              i18n,
              request: {
                language: 'en',
              },
              query,
              collections,
              transaction,
              userKey: user._key,
              auth: {
                userRequired: userRequired({
                  userKey: user._key,
                  userLoaderByKey: userLoaderByKey(query),
                }),
              },
              loaders: {
                orgLoaderBySlug: orgLoaderBySlug(query, 'en'),
                userLoaderByKey: userLoaderByKey(query),
              },
              validators: {
                cleanseInput,
                slugify,
              },
            },
          )

          const error = [new GraphQLError('todo')]

          expect(response.errors).toEqual(error)
          expect(consoleOutput).toEqual([
            `User: ${user._key} attempted to create an organization that already exists: treasury-board-of-canada-secretariat`,
          ])
        })
      })
      describe('transaction error occurs', () => {
        describe('when inserting organization', () => {
          it('returns an error', async () => {
            const userCursor = await query`
              FOR user IN users
                FILTER user.userName == "test.account@istio.actually.exists"
                RETURN user
            `
            const user = await userCursor.next()

            const orgLoader = orgLoaderBySlug(query, 'en')
            const userLoader = userLoaderByKey(query)

            query = jest
              .fn()
              .mockRejectedValue(new Error('Database error occurred.'))

            const response = await graphql(
              schema,
              `
                mutation {
                  createOrganization(
                    input: {
                      acronymEN: "TBS"
                      acronymFR: "SCT"
                      nameEN: "Treasury Board of Canada Secretariat"
                      nameFR: "Secrétariat du Conseil Trésor du Canada"
                      zoneEN: "FED"
                      zoneFR: "FED"
                      sectorEN: "TBS"
                      sectorFR: "TBS"
                      countryEN: "Canada"
                      countryFR: "Canada"
                      provinceEN: "Ontario"
                      provinceFR: "Ontario"
                      cityEN: "Ottawa"
                      cityFR: "Ottawa"
                    }
                  ) {
                    organization {
                      id
                      acronym
                      slug
                      name
                      zone
                      sector
                      country
                      province
                      city
                    }
                  }
                }
              `,
              null,
              {
                i18n,
                request: {
                  language: 'en',
                },
                query,
                collections,
                transaction,
                userKey: user._key,
                auth: {
                  userRequired: userRequired({
                    userKey: user._key,
                    userLoaderByKey: userLoader,
                  }),
                },
                loaders: {
                  orgLoaderBySlug: orgLoader,
                  userLoaderByKey: userLoader,
                },
                validators: {
                  cleanseInput,
                  slugify,
                },
              },
            )

            const error = [new GraphQLError('todo')]

            expect(response.errors).toEqual(error)
            expect(consoleOutput).toEqual([
              `Transaction error occurred when user: ${user._key} was creating new organization treasury-board-of-canada-secretariat: Error: Database error occurred.`,
            ])
          })
        })
        describe('when inserting edge', () => {
          it('returns an error message', async () => {
            const userCursor = await query`
              FOR user IN users
                FILTER user.userName == "test.account@istio.actually.exists"
                RETURN user
            `
            const user = await userCursor.next()

            const orgLoader = orgLoaderBySlug(query, 'en')
            const userLoader = userLoaderByKey(query)

            query = jest
              .fn()
              .mockResolvedValueOnce({
                next() {
                  return 'test'
                },
              })
              .mockRejectedValue(new Error('Database error occurred.'))

            const response = await graphql(
              schema,
              `
                mutation {
                  createOrganization(
                    input: {
                      acronymEN: "TBS"
                      acronymFR: "SCT"
                      nameEN: "Treasury Board of Canada Secretariat"
                      nameFR: "Secrétariat du Conseil Trésor du Canada"
                      zoneEN: "FED"
                      zoneFR: "FED"
                      sectorEN: "TBS"
                      sectorFR: "TBS"
                      countryEN: "Canada"
                      countryFR: "Canada"
                      provinceEN: "Ontario"
                      provinceFR: "Ontario"
                      cityEN: "Ottawa"
                      cityFR: "Ottawa"
                    }
                  ) {
                    organization {
                      id
                      acronym
                      slug
                      name
                      zone
                      sector
                      country
                      province
                      city
                    }
                  }
                }
              `,
              null,
              {
                i18n,
                request: {
                  language: 'en',
                },
                query,
                collections,
                transaction,
                userKey: user._key,
                auth: {
                  userRequired: userRequired({
                    userKey: user._key,
                    userLoaderByKey: userLoader,
                  }),
                },
                loaders: {
                  orgLoaderBySlug: orgLoader,
                  userLoaderByKey: userLoader,
                },
                validators: {
                  cleanseInput,
                  slugify,
                },
              },
            )

            const error = [new GraphQLError('todo')]

            expect(response.errors).toEqual(error)
            expect(consoleOutput).toEqual([
              `Transaction error occurred when inserting edge definition for user: ${user._key} to treasury-board-of-canada-secretariat: Error: Database error occurred.`,
            ])
          })
        })
        describe('when committing information to db', () => {
          it('returns an error message', async () => {
            const userCursor = await query`
              FOR user IN users
                FILTER user.userName == "test.account@istio.actually.exists"
                RETURN user
            `
            const user = await userCursor.next()

            const orgLoader = orgLoaderBySlug(query, 'en')
            const userLoader = userLoaderByKey(query)

            transaction = jest.fn().mockReturnValue({
              run() {
                return {
                  next() {
                    return { _id: 1 }
                  },
                }
              },
              commit() {
                throw new Error('Database error occurred.')
              },
            })

            const response = await graphql(
              schema,
              `
                mutation {
                  createOrganization(
                    input: {
                      acronymEN: "TBS"
                      acronymFR: "SCT"
                      nameEN: "Treasury Board of Canada Secretariat"
                      nameFR: "Secrétariat du Conseil Trésor du Canada"
                      zoneEN: "FED"
                      zoneFR: "FED"
                      sectorEN: "TBS"
                      sectorFR: "TBS"
                      countryEN: "Canada"
                      countryFR: "Canada"
                      provinceEN: "Ontario"
                      provinceFR: "Ontario"
                      cityEN: "Ottawa"
                      cityFR: "Ottawa"
                    }
                  ) {
                    organization {
                      id
                      acronym
                      slug
                      name
                      zone
                      sector
                      country
                      province
                      city
                    }
                  }
                }
              `,
              null,
              {
                i18n,
                request: {
                  language: 'en',
                },
                query,
                collections,
                transaction,
                userKey: user._key,
                auth: {
                  userRequired: userRequired({
                    userKey: user._key,
                    userLoaderByKey: userLoaderByKey(query),
                  }),
                },
                loaders: {
                  orgLoaderBySlug: orgLoader,
                  userLoaderByKey: userLoader,
                },
                validators: {
                  cleanseInput,
                  slugify,
                },
              },
            )

            const error = [new GraphQLError('todo')]

            expect(response.errors).toEqual(error)
            expect(consoleOutput).toEqual([
              `Transaction error occurred when committing new organization: treasury-board-of-canada-secretariat for user: ${user._key} to db: Error: Database error occurred.`,
            ])
          })
        })
      })
    })
  })
})
