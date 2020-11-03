const { Kind } = require('graphql')
const { stringify } = require('jest-matcher-utils')
const { setupI18n } = require('@lingui/core')

const englishMessages = require('../locale/en/messages')
const frenchMessages = require('../locale/fr/messages')
const { TranslatedBoolean } = require('../scalars')

describe('given the TranslatedBoolean scalar', () => {
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
    describe('given an bool scalar', () => {
      describe('serializing inputs', () => {
        describe('given valid inputs', () => {
          describe('given a valid bool', () => {
            it('returns test bool', () => {
              const testBool = true
              expect(TranslatedBoolean(i18n).serialize(testBool)).toEqual(
                testBool,
              )
            })
          })
        })
        describe('given invalid inputs', () => {
          ;['string', {}, [], null, undefined, 123].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedBoolean(i18n).serialize(invalidInput),
              ).toThrow(
                new TypeError(
                  `Boolean cannot represent a non boolean value: ${typeof invalidInput}`,
                ),
              )
            })
          })
        })
      })

      describe('value parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid bool', () => {
            it('returns test bool', () => {
              const testBool = true
              expect(TranslatedBoolean(i18n).parseValue(testBool)).toEqual(
                testBool,
              )
            })
          })
        })
        describe('given invalid inputs', () => {
          ;['string', {}, [], null, undefined, 123].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedBoolean(i18n).parseValue(invalidInput),
              ).toThrow(
                new TypeError(
                  `Boolean cannot represent a non boolean value: ${typeof invalidInput}`,
                ),
              )
            })
          })
        })
      })

      describe('literal parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid bool', () => {
            it('returns the test bool value', () => {
              const testBool = true
              const testLiteral = {
                kind: Kind.BOOLEAN,
                value: testBool,
              }
              expect(
                TranslatedBoolean(i18n).parseLiteral(testLiteral, {}),
              ).toEqual(testBool)
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
                TranslatedBoolean(i18n).parseLiteral(literal, {}),
              ).toThrow(
                new TypeError(
                  `Boolean cannot represent a non boolean value: ${literal.kind}`,
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
          describe('given a valid bool', () => {
            it('returns test bool', () => {
              const testBool = true
              expect(TranslatedBoolean(i18n).serialize(testBool)).toEqual(
                testBool,
              )
            })
          })
        })
        describe('given invalid inputs', () => {
          ;['string', {}, [], null, undefined, 123].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedBoolean(i18n).serialize(invalidInput),
              ).toThrow(new TypeError(`todo`))
            })
          })
        })
      })

      describe('value parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid bool', () => {
            it('returns test bool', () => {
              const testBool = true
              expect(TranslatedBoolean(i18n).parseValue(testBool)).toEqual(
                testBool,
              )
            })
          })
        })
        describe('given invalid inputs', () => {
          ;['string', {}, [], null, undefined, 123].forEach((invalidInput) => {
            it(`throws an error when serializing ${stringify(
              invalidInput,
            )}`, () => {
              expect(() =>
                TranslatedBoolean(i18n).parseValue(invalidInput),
              ).toThrow(new TypeError(`todo`))
            })
          })
        })
      })

      describe('literal parsing', () => {
        describe('given valid inputs', () => {
          describe('given a valid bool', () => {
            it('returns the test bool value', () => {
              const testBool = true
              const testLiteral = {
                kind: Kind.BOOLEAN,
                value: testBool,
              }
              expect(
                TranslatedBoolean(i18n).parseLiteral(testLiteral, {}),
              ).toEqual(testBool)
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
                TranslatedBoolean(i18n).parseLiteral(literal, {}),
              ).toThrow(new TypeError(`todo`))
            })
          })
        })
      })
    })
  })
})
