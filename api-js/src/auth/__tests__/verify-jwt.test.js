const { AUTHENTICATED_KEY } = process.env

const jwt = require('jsonwebtoken')
const { setupI18n } = require('@lingui/core')

const { verifyToken } = require('..')
const englishMessages = require('../../locale/en/messages')
const frenchMessages = require('../../locale/fr/messages')

describe('given a encoded token', () => {
  let consoleOutput = []
  let i18n
  const mockedInfo = (output) => consoleOutput.push(output)
  const mockedWarn = (output) => consoleOutput.push(output)
  beforeEach(() => {
    console.info = mockedInfo
    console.warn = mockedWarn
  })

  afterEach(() => {
    consoleOutput = []
  })
  describe('token can be decoded and verified', () => {
    it('returns the parameters', () => {
      const parameters = {
        userId: 1,
      }
      const token = jwt.sign({ parameters }, String(AUTHENTICATED_KEY), {
        algorithm: 'HS256',
      })

      const testVerify = verifyToken({ i18n })
      const decoded = testVerify({ token })
      expect(decoded.userId).toEqual(1)
    })
  })
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
    describe('if the secret does not match', () => {
      it('raises an error', () => {
        const parameters = {
          userId: 1,
        }
        const token = jwt.sign({ parameters }, 'superSecretKey', {
          algorithm: 'HS256',
        })

        const testVerify = verifyToken({ i18n })
        expect(() => {
          testVerify({ token })
        }).toThrow(Error('Invalid token, please request a new one.'))
        expect(consoleOutput).toEqual([
          `JWT was attempted to be verified but secret was incorrect.`,
        ])
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
    describe('if the secret does not match', () => {
      it('raises an error', () => {
        const parameters = {
          userId: 1,
        }
        const token = jwt.sign({ parameters }, 'superSecretKey', {
          algorithm: 'HS256',
        })

        const testVerify = verifyToken({ i18n })
        expect(() => {
          testVerify({ token })
        }).toThrow(Error('todo'))
        expect(consoleOutput).toEqual([
          `JWT was attempted to be verified but secret was incorrect.`,
        ])
      })
    })
  })
})