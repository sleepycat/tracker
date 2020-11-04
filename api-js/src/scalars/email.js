const { Kind, GraphQLError, GraphQLScalarType } = require('graphql')
const { t } = require('@lingui/macro')

const validate = (i18n) => (value) => {
  const EMAIL_ADDRESS_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  if (typeof value !== 'string') {
    throw new TypeError(i18n._(t`Value is not of type string: ${typeof value}`))
  }

  if (!EMAIL_ADDRESS_REGEX.test(value)) {
    throw new TypeError(i18n._(t`Value is not a valid email address: ${value}`))
  }

  return value
}

const parseLiteral = (i18n) => (ast) => {
  if (ast.kind !== Kind.STRING) {
    throw new GraphQLError(
      i18n._(
        t`Can only validate strings as email address but got a: ${ast.kind}`,
      ),
    )
  }

  return validate(i18n)(ast.value)
}

const EmailAddress = (i18n) =>
  new GraphQLScalarType({
    name: 'EmailAddress',
    description: i18n._(
      t`A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/.`,
    ),
    serialize: validate(i18n),
    parseValue: validate(i18n),
    parseLiteral: parseLiteral(i18n),
  })

module.exports = {
  EmailAddress,
}
