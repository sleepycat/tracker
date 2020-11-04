const { Acronym } = require('./acronym.js')
const { Domain } = require('./domain')
const { EmailAddress } = require('./email')
const { PhoneNumber } = require('./phone-number')
const { Selectors } = require('./selector.js')
const { Slug } = require('./slug.js')
const { Year } = require('./year.js')
const { TranslatedBoolean } = require('./translated-boolean')
const { TranslatedFloat } = require('./translated-float')
const { TranslatedID } = require('./translated-id')
const { TranslatedInt } = require('./translated-int')
const { TranslatedString } = require('./translated-string')

module.exports = {
  Acronym,
  Domain,
  EmailAddress,
  PhoneNumber,
  Selectors,
  Slug,
  Year,
  TranslatedBoolean,
  TranslatedFloat,
  TranslatedID,
  TranslatedInt,
  TranslatedString,
}
