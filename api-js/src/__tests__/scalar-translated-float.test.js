const { Kind } = require('graphql')
const { stringify } = require('jest-matcher-utils')
const { setupI18n } = require('@lingui/core')

const englishMessages = require('../locale/en/messages')
const frenchMessages = require('../locale/fr/messages')
const { TranslatedFloat } = require('../scalars')

describe('given the TranslatedFloat scalar', () => {
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
    describe('given a float scalar', () => {
      describe('serializing inputs', () => {
        describe('given valid inputs', () => {
          describe('given a valid float', () => {
            it('returns test float', () => {
              const testFloat = 5.5
              expect(TranslatedFloat(i18n).serialize(testFloat)).toEqual(testFloat)
            })
          })
        })
        describe('given invalid inputs', () => {
          ;['string', {}, [], null, undefined, true].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedFloat(i18n).serialize(invalidInput),
              ).toThrow(
                new TypeError(
                  `Float cannot represent non numeric value: ${typeof invalidInput}`,
                ),
              )
            })
          })
        })
      })

      describe('value parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid float', () => {
            it('returns test float', () => {
              const testFloat = 5.5
              expect(TranslatedFloat(i18n).parseValue(testFloat)).toEqual(testFloat)
            })
          })
        })
        describe('given invalid inputs', () => {
          ;['string', {}, [], null, undefined, true].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedFloat(i18n).parseValue(invalidInput),
              ).toThrow(
                new TypeError(
                  `Float cannot represent non numeric value: ${typeof invalidInput}`,
                ),
              )
            })
          })
        })
      })

      describe('literal parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid float', () => {
            it('returns the test float value', () => {
              const testFloat = 5.5
              const testLiteral = {
                kind: Kind.FLOAT,
                value: testFloat,
              }
              expect(
                TranslatedFloat(i18n).parseLiteral(testLiteral, {}),
              ).toEqual(testFloat)
            })
          })
        })
        describe('given invalid inputs', () => {
          ;[
            {
              kind: Kind.INT,
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
                TranslatedFloat(i18n).parseLiteral(literal, {}),
              ).toThrow(
                new TypeError(
                  `Float cannot represent non numeric value: ${literal.kind}`,
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
    describe('given an float scalar', () => {
      describe('serializing inputs', () => {
        describe('given valid inputs', () => {
          describe('given a valid float', () => {
            it('returns test float', () => {
              const testFloat = 5.5
              expect(TranslatedFloat(i18n).serialize(testFloat)).toEqual(testFloat)
            })
          })
        })
        describe('given invalid inputs', () => {
          ;['string', {}, [], null, undefined, true].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedFloat(i18n).serialize(invalidInput),
              ).toThrow(new TypeError(`todo`))
            })
          })
        })
      })

      describe('value parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid float', () => {
            it('returns test float', () => {
              const testFloat = 5.5
              expect(TranslatedFloat(i18n).parseValue(testFloat)).toEqual(testFloat)
            })
          })
        })
        describe('given invalid inputs', () => {
          ;['string', {}, [], null, undefined, true].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedFloat(i18n).parseValue(invalidInput),
              ).toThrow(new TypeError(`todo`))
            })
          })
        })
      })

      describe('literal parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid float', () => {
            it('returns the test float value', () => {
              const testFloat = 5.5
              const testLiteral = {
                kind: Kind.FLOAT,
                value: testFloat,
              }
              expect(
                TranslatedFloat(i18n).parseLiteral(testLiteral, {}),
              ).toEqual(testFloat)
            })
          })
        })
        describe('given invalid inputs', () => {
          ;[
            {
              kind: Kind.INT,
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
                TranslatedFloat(i18n).parseLiteral(literal, {}),
              ).toThrow(new TypeError(`todo`))
            })
          })
        })
      })
    })
  })
})
