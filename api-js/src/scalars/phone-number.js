const { Kind, GraphQLError, GraphQLScalarType } = require('graphql')
const { t } = require('@lingui/macro')

const validate = (i18n) => (value) => {
  const PHONE_NUMBER_REGEX = /^\+[1-9]\d{1,14}$/
  if (typeof value !== 'string') {
    throw new TypeError(i18n._(t`Value is not of type string: ${typeof value}`))
  }

  if (!PHONE_NUMBER_REGEX.test(value)) {
    throw new TypeError(
      i18n._(
        t`Value is not a valid phone number of the form +17895551234 (10-15 digits): ${value}`,
      ),
    )
  }

  return value
}

const parseLiteral = (i18n) => (ast) => {
  if (ast.kind !== Kind.STRING) {
    throw new GraphQLError(
      i18n._(
        t`Can only validate strings as phone numbers but got a: ${ast.kind}`,
      ),
    )
  }

  return validate(i18n)(ast.value)
}

const PhoneNumber = (i18n) =>
  new GraphQLScalarType({
    name: 'PhoneNumber',
    description: i18n._(
      t`A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234.`,
    ),
    serialize: validate(i18n),
    parseValue: validate(i18n),
    parseLiteral: parseLiteral(i18n),
  })

module.exports = {
  PhoneNumber,
}
