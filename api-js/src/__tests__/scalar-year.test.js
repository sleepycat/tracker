const { Kind } = require('graphql')
const { stringify } = require('jest-matcher-utils')
const { setupI18n } = require('@lingui/core')

const englishMessages = require('../locale/en/messages')
const frenchMessages = require('../locale/fr/messages')
const { Year } = require('../scalars')

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
  describe('given a year scalar', () => {
    describe('serializing inputs', () => {
      describe('given valid inputs', () => {
        describe('given a valid year', () => {
          it('returns test year', () => {
            const testYear = '2020'
            expect(Year(i18n).serialize(testYear)).toEqual(testYear)
          })
        })
        describe('given an invalid year', () => {
          it('throws a typeError', () => {
            const testYear = 'Text'
            expect(() => Year(i18n).serialize(testYear)).toThrow(
              new TypeError(`Value is not a valid year: ${testYear}`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => Year(i18n).serialize(invalidInput)).toThrow(
              new TypeError(`Value is not string: ${typeof invalidInput}`),
            )
          })
        })
      })
    })

    describe('value parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid year', () => {
          it('returns test year', () => {
            const testYear = '2020'
            expect(Year(i18n).parseValue(testYear)).toEqual(testYear)
          })
        })
        describe('given an invalid year', () => {
          it('throws an error', () => {
            const testYear = 'Text'
            expect(() => Year(i18n).parseValue(testYear)).toThrow(
              new TypeError(`Value is not a valid year: ${testYear}`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => Year(i18n).parseValue(invalidInput)).toThrow(
              new TypeError(`Value is not string: ${typeof invalidInput}`),
            )
          })
        })
      })
    })

    describe('literal parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid year', () => {
          it('returns the parsed value', () => {
            const testYear = '2020'
            const testLiteral = {
              kind: Kind.STRING,
              value: testYear,
            }
            expect(Year(i18n).parseLiteral(testLiteral, {})).toEqual(testYear)
          })
        })
        describe('given an invalid year', () => {
          it('throws an error', () => {
            const testYear = 'Text'
            const testLiteral = {
              kind: Kind.STRING,
              value: testYear,
            }
            expect(() => Year(i18n).parseLiteral(testLiteral, {})).toThrow(
              new TypeError(`Value is not a valid year: ${testYear}`),
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
            expect(() => Year(i18n).parseLiteral(literal, {})).toThrow(
              new TypeError(
                `Can only validate strings as year but got a: ${literal.kind}`,
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
  describe('given a year scalar', () => {
    describe('serializing inputs', () => {
      describe('given valid inputs', () => {
        describe('given a valid year', () => {
          it('returns test year', () => {
            const testYear = '2020'
            expect(Year(i18n).serialize(testYear)).toEqual(testYear)
          })
        })
        describe('given an invalid year', () => {
          it('throws a typeError', () => {
            const testYear = 'Text'
            expect(() => Year(i18n).serialize(testYear)).toThrow(
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
            expect(() => Year(i18n).serialize(invalidInput)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })

    describe('value parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid year', () => {
          it('returns test year', () => {
            const testYear = '2020'
            expect(Year(i18n).parseValue(testYear)).toEqual(testYear)
          })
        })
        describe('given an invalid year', () => {
          it('throws an error', () => {
            const testYear = 'Text'
            expect(() => Year(i18n).parseValue(testYear)).toThrow(
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
            expect(() => Year(i18n).parseValue(invalidInput)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })

    describe('literal parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid year', () => {
          it('returns the parsed value', () => {
            const testYear = '2020'
            const testLiteral = {
              kind: Kind.STRING,
              value: testYear,
            }
            expect(Year(i18n).parseLiteral(testLiteral, {})).toEqual(testYear)
          })
        })
        describe('given an invalid year', () => {
          it('throws an error', () => {
            const testYear = 'Text'
            const testLiteral = {
              kind: Kind.STRING,
              value: testYear,
            }
            expect(() => Year(i18n).parseLiteral(testLiteral, {})).toThrow(
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
            expect(() => Year(i18n).parseLiteral(literal, {})).toThrow(
              new TypeError(
                `todo`,
              ),
            )
          })
        })
      })
    })
  })
})