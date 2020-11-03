const { Kind } = require('graphql')
const { stringify } = require('jest-matcher-utils')
const { setupI18n } = require('@lingui/core')

const englishMessages = require('../locale/en/messages')
const frenchMessages = require('../locale/fr/messages')
const { TranslatedInt } = require('../scalars')

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
    describe('given an int scalar', () => {
      describe('serializing inputs', () => {
        describe('given valid inputs', () => {
          describe('given a valid int', () => {
            it('returns test int', () => {
              const testInt = 1
              expect(TranslatedInt(i18n).serialize(testInt)).toEqual(testInt)
            })
          })
        })
        describe('given invalid inputs', () => {
          ;['string', {}, [], null, undefined, true].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() => TranslatedInt(i18n).serialize(invalidInput)).toThrow(
                new TypeError(
                  `Int cannot represent non-integer value: ${typeof invalidInput}`,
                ),
              )
            })
          })
        })
      })

      describe('value parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid int', () => {
            it('returns test year', () => {
              const testInt = 1
              expect(TranslatedInt(i18n).parseValue(testInt)).toEqual(testInt)
            })
          })
        })
        describe('given invalid inputs', () => {
          ;['string', {}, [], null, undefined, true].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedInt(i18n).parseValue(invalidInput),
              ).toThrow(
                new TypeError(
                  `Int cannot represent non-integer value: ${typeof invalidInput}`,
                ),
              )
            })
          })
        })
      })

      describe('literal parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid int', () => {
            it('returns the test int value', () => {
              const testInt = 1
              const testLiteral = {
                kind: Kind.INT,
                value: testInt,
              }
              expect(TranslatedInt(i18n).parseLiteral(testLiteral, {})).toEqual(testInt)
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
                TranslatedInt(i18n).parseLiteral(literal, {}),
              ).toThrow(
                new TypeError(
                  `Int cannot represent non-integer value: ${literal.kind}`,
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
    describe('given an int scalar', () => {
      describe('serializing inputs', () => {
        describe('given valid inputs', () => {
          describe('given a valid int', () => {
            it('returns test int', () => {
              const testInt = 1
              expect(TranslatedInt(i18n).serialize(testInt)).toEqual(testInt)
            })
          })
        })
        describe('given invalid inputs', () => {
          ;['string', {}, [], null, undefined, true].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() => TranslatedInt(i18n).serialize(invalidInput)).toThrow(
                new TypeError(`todo`),
              )
            })
          })
        })
      })

      describe('value parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid int', () => {
            it('returns test int', () => {
              const testInt = 1
              expect(TranslatedInt(i18n).parseValue(testInt)).toEqual(testInt)
            })
          })
        })
        describe('given invalid inputs', () => {
          ;['string', {}, [], null, undefined, true].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedInt(i18n).parseValue(invalidInput),
              ).toThrow(new TypeError(`todo`))
            })
          })
        })
      })

      describe('literal parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid int', () => {
            it('returns the test int value', () => {
              const testInt = 1
              const testLiteral = {
                kind: Kind.INT,
                value: testInt,
              }
              expect(TranslatedInt(i18n).parseLiteral(testLiteral, {})).toEqual(
                testInt,
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
              expect(() =>
                TranslatedInt(i18n).parseLiteral(literal, {}),
              ).toThrow(new TypeError(`todo`))
            })
          })
        })
      })
    })
  })
})
