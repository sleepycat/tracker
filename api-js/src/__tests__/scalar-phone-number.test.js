const { Kind } = require('graphql')
const { stringify } = require('jest-matcher-utils')
const { setupI18n } = require('@lingui/core')

const englishMessages = require('../locale/en/messages')
const frenchMessages = require('../locale/fr/messages')
const { PhoneNumber } = require('../scalars')

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
  describe('given a phone number scalar', () => {
    describe('serializing inputs', () => {
      describe('given valid inputs', () => {
        describe('given a valid phone number', () => {
          it('returns test phone number', () => {
            const testPhoneNumber = '+17895551234'
            expect(PhoneNumber(i18n).serialize(testPhoneNumber)).toEqual(testPhoneNumber)
          })
        })
        describe('given an invalid phone number', () => {
          it('throws type error', () => {
            const testPhoneNumber = 'not a phone number'
            expect(() => PhoneNumber(i18n).serialize(testPhoneNumber)).toThrow(
              new TypeError(`Value is not a valid phone number of the form +17895551234 (10-15 digits): ${testPhoneNumber}`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => PhoneNumber(i18n).serialize(invalidInput)).toThrow(
              new TypeError(`Value is not of type string: ${typeof invalidInput}`),
            )
          })
        })
      })
    })
    describe('value parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid phone number', () => {
          it('returns the parsed phone number', () => {
            const testPhoneNumber = '+17895551234'
            expect(PhoneNumber(i18n).parseValue(testPhoneNumber)).toEqual(testPhoneNumber)
          })
        })
        describe('given an invalid phone number', () => {
          it('throws an error', () => {
            const testPhoneNumber = 'not a phone number'
            expect(() => PhoneNumber(i18n).parseValue(testPhoneNumber)).toThrow(
              new TypeError(`Value is not a valid phone number of the form +17895551234 (10-15 digits): ${testPhoneNumber}`),
            )
          })
        })
      })
      describe('given invalid inputs', () => {
        ;[123, {}, [], null, undefined, true].forEach((invalidInput) => {
          it(`throws an error when serializing ${stringify(
            invalidInput,
          )}`, () => {
            expect(() => PhoneNumber(i18n).parseValue(invalidInput)).toThrow(
              new TypeError(`Value is not of type string: ${typeof invalidInput}`),
            )
          })
        })
      })
    })
    describe('literal parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid phone number', () => {
          it('returns the parsed phone number', () => {
            const testPhoneNumber = '+17895551234'
            const testLiteral = {
              kind: Kind.STRING,
              value: testPhoneNumber,
            }
            expect(PhoneNumber(i18n).parseLiteral(testLiteral, {})).toEqual(
              testPhoneNumber,
            )
          })
        })
        describe('given an invalid phone number', () => {
          it('throws an error', () => {
            const testPhoneNumber = 'not a phone number'
            const testLiteral = {
              kind: Kind.STRING,
              value: testPhoneNumber,
            }
            expect(() => PhoneNumber(i18n).parseLiteral(testLiteral, {})).toThrow(
              new TypeError(`Value is not a valid phone number of the form +17895551234 (10-15 digits): ${testPhoneNumber}`),
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
            expect(() => PhoneNumber(i18n).parseLiteral(literal, {})).toThrow(
              new TypeError(
                `Can only validate strings as phone numbers but got a: ${literal.kind}`,
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
  describe('given a phone number scalar', () => {
    describe('serializing inputs', () => {
      describe('given valid inputs', () => {
        describe('given a valid phone number', () => {
          it('returns test phone number', () => {
            const testPhoneNumber = '+17895551234'
            expect(PhoneNumber(i18n).serialize(testPhoneNumber)).toEqual(testPhoneNumber)
          })
        })
        describe('given an invalid phone number', () => {
          it('throws type error', () => {
            const testPhoneNumber = 'not a phone number'
            expect(() => PhoneNumber(i18n).serialize(testPhoneNumber)).toThrow(
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
            expect(() => PhoneNumber(i18n).serialize(invalidInput)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
    describe('value parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid phone number', () => {
          it('returns the parsed phone number', () => {
            const testPhoneNumber = '+17895551234'
            expect(PhoneNumber(i18n).parseValue(testPhoneNumber)).toEqual(testPhoneNumber)
          })
        })
        describe('given an invalid phone number', () => {
          it('throws an error', () => {
            const testPhoneNumber = 'not a phone number'
            expect(() => PhoneNumber(i18n).parseValue(testPhoneNumber)).toThrow(
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
            expect(() => PhoneNumber(i18n).parseValue(invalidInput)).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
    describe('literal parsing', () => {
      describe('given valid inputs', () => {
        describe('given a valid phone number', () => {
          it('returns the parsed phone number', () => {
            const testPhoneNumber = '+17895551234'
            const testLiteral = {
              kind: Kind.STRING,
              value: testPhoneNumber,
            }
            expect(PhoneNumber(i18n).parseLiteral(testLiteral, {})).toEqual(
              testPhoneNumber,
            )
          })
        })
        describe('given an invalid phone number', () => {
          it('throws an error', () => {
            const testPhoneNumber = 'not a phone number'
            const testLiteral = {
              kind: Kind.STRING,
              value: testPhoneNumber,
            }
            expect(() => PhoneNumber(i18n).parseLiteral(testLiteral, {})).toThrow(
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
            expect(() => PhoneNumber(i18n).parseLiteral(literal, {})).toThrow(
              new TypeError(`todo`),
            )
          })
        })
      })
    })
  })
})
