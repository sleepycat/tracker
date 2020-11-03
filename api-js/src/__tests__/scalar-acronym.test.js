const { Kind } = require('graphql')
const { stringify } = require('jest-matcher-utils')
const { setupI18n } = require('@lingui/core')

const englishMessages = require('../locale/en/messages')
const frenchMessages = require('../locale/fr/messages')
const { Acronym } = require('../scalars')

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
  describe('given a acronym scalar', () => {
    describe('serializing inputs', () => {
      describe('given valid inputs', () => {
        describe('given a valid acronym', () => {
          it('returns test acronym', () => {
            const testAcronym = 'CANADA'
            expect(Acronym(i18n).serialize(testAcronym)).toEqual(testAcronym)
          })
        })
        describe('given an invalid acronym', () => {
          it('throws type error', () => {
            const testAcronym = 'not an acronym'
            expect(() => Acronym(i18n).serialize(testAcronym)).toThrow(
              new TypeError(`Value is not a valid acronym: ${testAcronym}`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => Acronym(i18n).serialize(invalidInput)).toThrow(
              new TypeError(`Value is not string: ${typeof invalidInput}`),
            )
          })
        })
      })
    })
    describe('value parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid acronym', () => {
          it('returns the parsed acronym', () => {
            const testAcronym = 'CANADA'
            expect(Acronym(i18n).parseValue(testAcronym)).toEqual(testAcronym)
          })
        })
        describe('given an invalid acronym', () => {
          it('throws an error', () => {
            const testAcronym = 'not an acronym'
            expect(() => Acronym(i18n).parseValue(testAcronym)).toThrow(
              new TypeError(`Value is not a valid acronym: ${testAcronym}`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => Acronym(i18n).parseValue(invalidInput)).toThrow(
              new TypeError(`Value is not string: ${typeof invalidInput}`),
            )
          })
        })
      })
    })
    describe('literal parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid acronym', () => {
          it('returns parsed value', () => {
            const testAcronym = 'CANADA'
            const testLiteral = {
              kind: Kind.STRING,
              value: testAcronym,
            }
            expect(Acronym(i18n).parseLiteral(testLiteral, {})).toEqual(
              testAcronym,
            )
          })
        })
        describe('given an invalid acronym', () => {
          it('throws an error', () => {
            const testAcronym = 'not an acronym'
            const testLiteral = {
              kind: Kind.STRING,
              value: testAcronym,
            }
            expect(() => Acronym(i18n).parseLiteral(testLiteral, {})).toThrow(
              new TypeError(`Value is not a valid acronym: ${testAcronym}`),
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
            expect(() => Acronym(i18n).parseLiteral(literal, {})).toThrow(
              new TypeError(
                `Can only validate strings as acronyms but got a: ${literal.kind}`,
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
  describe('given a acronym scalar', () => {
    describe('serializing inputs', () => {
      describe('given valid inputs', () => {
        describe('given a valid acronym', () => {
          it('returns test acronym', () => {
            const testAcronym = 'CANADA'
            expect(Acronym(i18n).serialize(testAcronym)).toEqual(testAcronym)
          })
        })
        describe('given an invalid acronym', () => {
          it('throws type error', () => {
            const testAcronym = 'not an acronym'
            expect(() => Acronym(i18n).serialize(testAcronym)).toThrow(
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
            expect(() => Acronym(i18n).serialize(invalidInput)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
    describe('value parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid acronym', () => {
          it('returns the parsed acronym', () => {
            const testAcronym = 'CANADA'
            expect(Acronym(i18n).parseValue(testAcronym)).toEqual(testAcronym)
          })
        })
        describe('given an invalid acronym', () => {
          it('throws an error', () => {
            const testAcronym = 'not an acronym'
            expect(() => Acronym(i18n).parseValue(testAcronym)).toThrow(
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
            expect(() => Acronym(i18n).parseValue(invalidInput)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
    describe('literal parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid acronym', () => {
          it('returns parsed value', () => {
            const testAcronym = 'CANADA'
            const testLiteral = {
              kind: Kind.STRING,
              value: testAcronym,
            }
            expect(Acronym(i18n).parseLiteral(testLiteral, {})).toEqual(
              testAcronym,
            )
          })
        })
        describe('given an invalid acronym', () => {
          it('throws an error', () => {
            const testAcronym = 'not an acronym'
            const testLiteral = {
              kind: Kind.STRING,
              value: testAcronym,
            }
            expect(() => Acronym(i18n).parseLiteral(testLiteral, {})).toThrow(
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
            expect(() => Acronym(i18n).parseLiteral(literal, {})).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
  })
})
