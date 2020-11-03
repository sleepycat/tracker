const { Kind } = require('graphql')
const { stringify } = require('jest-matcher-utils')
const { setupI18n } = require('@lingui/core')

const englishMessages = require('../locale/en/messages')
const frenchMessages = require('../locale/fr/messages')
const { Selectors } = require('../scalars')

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
  describe('given a selectors scalar', () => {
    describe('serializing inputs', () => {
      describe('given valid inputs', () => {
        describe('given a valid selector', () => {
          it('returns test selector', () => {
            const testSelector = 'selector1._domainkey'
            expect(Selectors(i18n).serialize(testSelector)).toEqual(
              testSelector,
            )
          })
        })
        describe('given an invalid selector', () => {
          describe('selector contains string', () => {
            it('throws an error', () => {
              const testSelector = 'This is an invalid selector'
              expect(() => Selectors(i18n).serialize(testSelector)).toThrow(
                new TypeError(`Value is not a valid selector: ${testSelector}`),
              )
            })
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => Selectors(i18n).serialize(invalidInput)).toThrow(
              new TypeError(`Value is not a string: ${typeof invalidInput}`),
            )
          })
        })
      })
    })
    describe('value parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid selector', () => {
          it('returns test selector', () => {
            const testSelector = 'selector1._domainkey'
            expect(Selectors(i18n).parseValue(testSelector)).toEqual(
              testSelector,
            )
          })
        })
        describe('given an invalid selector', () => {
          describe('selector contains string', () => {
            it('throws an error', () => {
              const testSelector = 'This is an invalid selector'
              expect(() => Selectors(i18n).parseValue(testSelector)).toThrow(
                new TypeError(`Value is not a valid selector: ${testSelector}`),
              )
            })
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => Selectors(i18n).parseValue(invalidInput)).toThrow(
              new TypeError(`Value is not a string: ${typeof invalidInput}`),
            )
          })
        })
      })
    })
    describe('literal parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid selector', () => {
          it('returns test selector', () => {
            const testSelector = 'selector1._domainkey'
            const testLiteral = {
              kind: Kind.STRING,
              value: testSelector,
            }
            expect(Selectors(i18n).parseLiteral(testLiteral, {})).toEqual(
              testSelector,
            )
          })
        })
        describe('given an invalid selector', () => {
          describe('selector contains string', () => {
            it('throws an error', () => {
              const testSelector = 'This is an invalid selector'
              const testLiteral = {
                kind: Kind.STRING,
                value: testSelector,
              }
              expect(() =>
                Selectors(i18n).parseLiteral(testLiteral, {}),
              ).toThrow(
                new TypeError(`Value is not a valid selector: ${testSelector}`),
              )
            })
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
            expect(() => Selectors(i18n).parseLiteral(literal, {})).toThrow(
              new TypeError(
                `Can only validate strings as selectors but got a: ${literal.kind}`,
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
  describe('given a selectors scalar', () => {
    describe('serializing inputs', () => {
      describe('given valid inputs', () => {
        describe('given a valid selector', () => {
          it('returns test selector', () => {
            const testSelector = 'selector1._domainkey'
            expect(Selectors(i18n).serialize(testSelector)).toEqual(
              testSelector,
            )
          })
        })
        describe('given an invalid selector', () => {
          describe('selector contains string', () => {
            it('throws an error', () => {
              const testSelector = 'This is an invalid selector'
              expect(() => Selectors(i18n).serialize(testSelector)).toThrow(
                new TypeError(`todo`),
              )
            })
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => Selectors(i18n).serialize(invalidInput)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
    describe('value parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid selector', () => {
          it('returns test selector', () => {
            const testSelector = 'selector1._domainkey'
            expect(Selectors(i18n).parseValue(testSelector)).toEqual(
              testSelector,
            )
          })
        })
        describe('given an invalid selector', () => {
          describe('selector contains string', () => {
            it('throws an error', () => {
              const testSelector = 'This is an invalid selector'
              expect(() => Selectors(i18n).parseValue(testSelector)).toThrow(
                new TypeError(`todo`),
              )
            })
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => Selectors(i18n).parseValue(invalidInput)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
    describe('literal parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid selector', () => {
          it('returns test selector', () => {
            const testSelector = 'selector1._domainkey'
            const testLiteral = {
              kind: Kind.STRING,
              value: testSelector,
            }
            expect(Selectors(i18n).parseLiteral(testLiteral, {})).toEqual(
              testSelector,
            )
          })
        })
        describe('given an invalid selector', () => {
          describe('selector contains string', () => {
            it('throws an error', () => {
              const testSelector = 'This is an invalid selector'
              const testLiteral = {
                kind: Kind.STRING,
                value: testSelector,
              }
              expect(() =>
                Selectors(i18n).parseLiteral(testLiteral, {}),
              ).toThrow(
                new TypeError(`todo`),
              )
            })
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
            expect(() => Selectors(i18n).parseLiteral(literal, {})).toThrow(
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