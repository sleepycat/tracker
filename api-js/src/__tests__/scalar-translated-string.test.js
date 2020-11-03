const { Kind } = require('graphql')
const { stringify } = require('jest-matcher-utils')
const { setupI18n } = require('@lingui/core')

const englishMessages = require('../locale/en/messages')
const frenchMessages = require('../locale/fr/messages')
const { TranslatedString } = require('../scalars')

describe('given the TranslatedInt scalar', () => {
  let i18n
  describe('language is set to english', () => {
    beforeEach(() => {
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
    describe('given an string scalar', () => {
      describe('serializing inputs', () => {
        describe('given valid inputs', () => {
          describe('given a valid string', () => {
            it('returns test string', () => {
              const testString = 'string'
              expect(TranslatedString(i18n).serialize(testString)).toEqual(
                testString,
              )
            })
          })
        })
        describe('given invalid inputs', () => {
          ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedString(i18n).serialize(invalidInput),
              ).toThrow(
                new TypeError(
                  `String cannot represent a non string value: ${typeof invalidInput}`,
                ),
              )
            })
          })
        })
      })

      describe('value parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid string', () => {
            it('returns test string', () => {
              const testString = 'string'
              expect(TranslatedString(i18n).parseValue(testString)).toEqual(
                testString,
              )
            })
          })
        })
        describe('given invalid inputs', () => {
          ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedString(i18n).parseValue(invalidInput),
              ).toThrow(
                new TypeError(
                  `String cannot represent a non string value: ${typeof invalidInput}`,
                ),
              )
            })
          })
        })
      })

      describe('literal parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid string', () => {
            it('returns the test string value', () => {
              const testString = 'string'
              const testLiteral = {
                kind: Kind.STRING,
                value: testString,
              }
              expect(
                TranslatedString(i18n).parseLiteral(testLiteral, {}),
              ).toEqual(testString)
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
              expect(() =>
                TranslatedString(i18n).parseLiteral(literal, {}),
              ).toThrow(
                new TypeError(
                  `String cannot represent a non string value: ${literal.kind}`,
                ),
              )
            })
          })
        })
      })
    })
  })

  describe('language is set to french', () => {
    beforeEach(() => {
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
    describe('given an string scalar', () => {
      describe('serializing inputs', () => {
        describe('given valid inputs', () => {
          describe('given a valid string', () => {
            it('returns test string', () => {
              const testString = 'string'
              expect(TranslatedString(i18n).serialize(testString)).toEqual(
                testString,
              )
            })
          })
        })
        describe('given invalid inputs', () => {
          ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedString(i18n).serialize(invalidInput),
              ).toThrow(new TypeError(`todo`))
            })
          })
        })
      })

      describe('value parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid string', () => {
            it('returns test string', () => {
              const testString = 'string'
              expect(TranslatedString(i18n).parseValue(testString)).toEqual(
                testString,
              )
            })
          })
        })
        describe('given invalid inputs', () => {
          ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedString(i18n).parseValue(invalidInput),
              ).toThrow(new TypeError(`todo`))
            })
          })
        })
      })

      describe('literal parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid string', () => {
            it('returns the test string value', () => {
              const testString = 'string'
              const testLiteral = {
                kind: Kind.STRING,
                value: testString,
              }
              expect(
                TranslatedString(i18n).parseLiteral(testLiteral, {}),
              ).toEqual(testString)
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
              expect(() =>
                TranslatedString(i18n).parseLiteral(literal, {}),
              ).toThrow(new TypeError(`todo`))
            })
          })
        })
      })
    })
  })
})
