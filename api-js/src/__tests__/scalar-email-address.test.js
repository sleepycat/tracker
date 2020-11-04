const { Kind } = require('graphql')
const { stringify } = require('jest-matcher-utils')
const { setupI18n } = require('@lingui/core')

const englishMessages = require('../locale/en/messages')
const frenchMessages = require('../locale/fr/messages')
const { EmailAddress } = require('../scalars')

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
  describe('given an email address scalar', () => {
    describe('serializing inputs', () => {
      describe('given valid inputs', () => {
        describe('given a valid email address', () => {
          it('returns test email address', () => {
            const testEmail = 'test@email.ca'
            expect(EmailAddress(i18n).serialize(testEmail)).toEqual(testEmail)
          })
        })
        describe('given an invalid email address', () => {
          it('throws type error', () => {
            const testEmail = 'not an email address'
            expect(() => EmailAddress(i18n).serialize(testEmail)).toThrow(
              new TypeError(`Value is not a valid email address: ${testEmail}`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => EmailAddress(i18n).serialize(invalidInput)).toThrow(
              new TypeError(`Value is not of type string: ${typeof invalidInput}`),
            )
          })
        })
      })
    })
    describe('value parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid email address', () => {
          it('returns the parsed email address', () => {
            const testEmail = 'test@email.ca'
            expect(EmailAddress(i18n).parseValue(testEmail)).toEqual(testEmail)
          })
        })
        describe('given an invalid email address', () => {
          it('throws an error', () => {
            const testEmail = 'not an email address'
            expect(() => EmailAddress(i18n).parseValue(testEmail)).toThrow(
              new TypeError(`Value is not a valid email address: ${testEmail}`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => EmailAddress(i18n).parseValue(invalidInput)).toThrow(
              new TypeError(`Value is not of type string: ${typeof invalidInput}`),
            )
          })
        })
      })
    })
    describe('literal parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid email address', () => {
          it('returns the parsed email address', () => {
            const testEmail = 'test@email.ca'
            const testLiteral = {
              kind: Kind.STRING,
              value: testEmail,
            }
            expect(EmailAddress(i18n).parseLiteral(testLiteral, {})).toEqual(
              testEmail,
            )
          })
        })
        describe('given an invalid email address', () => {
          it('throws an error', () => {
            const testEmail = 'not an email address'
            const testLiteral = {
              kind: Kind.STRING,
              value: testEmail,
            }
            expect(() => EmailAddress(i18n).parseLiteral(testLiteral, {})).toThrow(
              new TypeError(`Value is not a valid email address: ${testEmail}`),
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
            expect(() => EmailAddress(i18n).parseLiteral(literal, {})).toThrow(
              new TypeError(
                `Can only validate strings as email address but got a: ${literal.kind}`,
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
  describe('given an email address scalar', () => {
    describe('serializing inputs', () => {
      describe('given valid inputs', () => {
        describe('given a valid email address', () => {
          it('returns test email address', () => {
            const testEmail = 'test@email.ca'
            expect(EmailAddress(i18n).serialize(testEmail)).toEqual(testEmail)
          })
        })
        describe('given an invalid email address', () => {
          it('throws type error', () => {
            const testEmail = 'not an email address'
            expect(() => EmailAddress(i18n).serialize(testEmail)).toThrow(
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
            expect(() => EmailAddress(i18n).serialize(invalidInput)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
    describe('value parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid email address', () => {
          it('returns the parsed email address', () => {
            const testEmail = 'test@email.ca'
            expect(EmailAddress(i18n).parseValue(testEmail)).toEqual(testEmail)
          })
        })
        describe('given an invalid email address', () => {
          it('throws an error', () => {
            const testEmail = 'not an email address'
            expect(() => EmailAddress(i18n).parseValue(testEmail)).toThrow(
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
            expect(() => EmailAddress(i18n).parseValue(invalidInput)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
    describe('literal parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid email address', () => {
          it('returns the parsed email address', () => {
            const testEmail = 'test@email.ca'
            const testLiteral = {
              kind: Kind.STRING,
              value: testEmail,
            }
            expect(EmailAddress(i18n).parseLiteral(testLiteral, {})).toEqual(
              testEmail,
            )
          })
        })
        describe('given an invalid email address', () => {
          it('throws an error', () => {
            const testEmail = 'not an email address'
            const testLiteral = {
              kind: Kind.STRING,
              value: testEmail,
            }
            expect(() => EmailAddress(i18n).parseLiteral(testLiteral, {})).toThrow(
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
            expect(() => EmailAddress(i18n).parseLiteral(literal, {})).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
  })
})
