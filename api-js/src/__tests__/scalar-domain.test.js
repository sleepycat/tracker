const { Kind } = require('graphql')
const { stringify } = require('jest-matcher-utils')
const { setupI18n } = require('@lingui/core')

const englishMessages = require('../locale/en/messages')
const frenchMessages = require('../locale/fr/messages')
const { Domain } = require('../scalars')

let i18n
describe('language is set to english', () => {
  beforeAll(() => {
    i18n = setupI18n({
      language: 'en',
      locales: ['en', 'fr'],
      missing: 'Traduction manquante',
      catalogs: {
        en: englishMessages,
        fr: frenchMessages,
      },
    })
  })
  describe('given a domain scalar', () => {
    describe('serializing inputs', () => {
      describe('given valid inputs', () => {
        describe('given a valid domain', () => {
          it('returns test domain', () => {
            const testDomain = 'test.domain.ca'
            expect(Domain(i18n).serialize(testDomain)).toEqual(testDomain)
          })
        })
        describe('given an invalid domain', () => {
          it('throws type error', () => {
            const testDomain = 'not an domain'
            expect(() => Domain(i18n).serialize(testDomain)).toThrow(
              new TypeError(`Value is not a valid domain: ${testDomain}`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => Domain(i18n).serialize(invalidInput)).toThrow(
              new TypeError(`Value is not a string: ${typeof invalidInput}`),
            )
          })
        })
      })
    })
    describe('value parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid domain', () => {
          it('returns the parsed domain', () => {
            const testDomain = 'test.domain.ca'
            expect(Domain(i18n).parseValue(testDomain)).toEqual(testDomain)
          })
        })
        describe('given an invalid domain', () => {
          it('throws an error', () => {
            const testDomain = 'not an domain'
            expect(() => Domain(i18n).parseValue(testDomain)).toThrow(
              new TypeError(`Value is not a valid domain: ${testDomain}`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => Domain(i18n).parseValue(invalidInput)).toThrow(
              new TypeError(`Value is not a string: ${typeof invalidInput}`),
            )
          })
        })
      })
    })
    describe('literal parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid domain', () => {
          it('returns the parsed domain', () => {
            const testDomain = 'test.domain.ca'
            const testLiteral = {
              kind: Kind.STRING,
              value: testDomain,
            }
            expect(Domain(i18n).parseLiteral(testLiteral, {})).toEqual(
              testDomain,
            )
          })
        })
        describe('given an invalid domain', () => {
          it('throws an error', () => {
            const testDomain = 'not an domain'
            const testLiteral = {
              kind: Kind.STRING,
              value: testDomain,
            }
            expect(() => Domain(i18n).parseLiteral(testLiteral, {})).toThrow(
              new TypeError(`Value is not a valid domain: ${testDomain}`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[
          {
            kind: Kind.FLOAT,
            value: '5',
          },
          {
            kind: Kind.DOCUMENT,
          },
        ].forEach((literal) => {
          it(`throws an error when parsing invalid literal ${stringify(
            literal,
          )}`, () => {
            expect(() => Domain(i18n).parseLiteral(literal, {})).toThrow(
              new TypeError(
                `Can only validate strings as domains but got a: ${literal.kind}`,
              ),
            )
          })
        })
      })
    })
  })
})
describe('language is set to french', () => {
  beforeAll(() => {
    i18n = setupI18n({
      language: 'fr',
      locales: ['en', 'fr'],
      missing: 'Traduction manquante',
      catalogs: {
        en: englishMessages,
        fr: frenchMessages,
      },
    })
  })
  describe('given a domain scalar', () => {
    describe('serializing inputs', () => {
      describe('given valid inputs', () => {
        describe('given a valid domain', () => {
          it('returns test domain', () => {
            const testDomain = 'test.domain.ca'
            expect(Domain(i18n).serialize(testDomain)).toEqual(testDomain)
          })
        })
        describe('given an invalid domain', () => {
          it('throws type error', () => {
            const testDomain = 'not an domain'
            expect(() => Domain(i18n).serialize(testDomain)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => Domain(i18n).serialize(invalidInput)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
    describe('value parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid domain', () => {
          it('returns the parsed domain', () => {
            const testDomain = 'test.domain.ca'
            expect(Domain(i18n).parseValue(testDomain)).toEqual(testDomain)
          })
        })
        describe('given an invalid domain', () => {
          it('throws an error', () => {
            const testDomain = 'not an domain'
            expect(() => Domain(i18n).parseValue(testDomain)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => Domain(i18n).parseValue(invalidInput)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
    describe('literal parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid domain', () => {
          it('returns the parsed domain', () => {
            const testDomain = 'test.domain.ca'
            const testLiteral = {
              kind: Kind.STRING,
              value: testDomain,
            }
            expect(Domain(i18n).parseLiteral(testLiteral, {})).toEqual(
              testDomain,
            )
          })
        })
        describe('given an invalid domain', () => {
          it('throws an error', () => {
            const testDomain = 'not an domain'
            const testLiteral = {
              kind: Kind.STRING,
              value: testDomain,
            }
            expect(() => Domain(i18n).parseLiteral(testLiteral, {})).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[
          {
            kind: Kind.FLOAT,
            value: '5',
          },
          {
            kind: Kind.DOCUMENT,
          },
        ].forEach((literal) => {
          it(`throws an error when parsing invalid literal ${stringify(
            literal,
          )}`, () => {
            expect(() => Domain(i18n).parseLiteral(literal, {})).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
  })
})
