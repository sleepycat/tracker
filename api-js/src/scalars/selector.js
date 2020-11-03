const { t } = require('@lingui/macro')
const { Kind, GraphQLError, GraphQLScalarType } = require('graphql')

const validate = (i18n) => (value) => {
  const SLUG_REGEX = /\w+\._domainkey/
  if (typeof value !== typeof 'string') {
    throw new TypeError(i18n._(t`Value is not a string: ${typeof value}`))
  }
  if (!SLUG_REGEX.test(value)) {
    throw new TypeError(i18n._(t`Value is not a valid selector: ${value}`))
  }

  return value
}

const parseLiteral = (i18n) => (ast) => {
  if (ast.kind !== Kind.STRING) {
    throw new GraphQLError(
      i18n._(t`Can only validate strings as selectors but got a: ${ast.kind}`),
    )
  }
  return validate(i18n)(ast.value)
}

const Selectors = (i18n) =>
  new GraphQLScalarType({
    name: 'Selector',
    description: i18n._(
      t`A field that conforms to a string, with strings ending in ._domainkey.`,
    ),
    serialize: validate(i18n),
    parseValue: validate(i18n),
    parseLiteral: parseLiteral(i18n),
  })

module.exports = {
  Selectors,
}
