const { t } = require('@lingui/macro')
const { Kind, GraphQLError, GraphQLScalarType } = require('graphql')

const validate = (i18n) => (value) => {
  const ACRONYM_REGEX = /^[A-Z0-9_-]{1,50}$/

  if (typeof value !== 'string') {
    throw new TypeError(i18n._(t`Value is not string: ${typeof value}`))
  }

  if (!ACRONYM_REGEX.test(value)) {
    throw new TypeError(i18n._(t`Value is not a valid acronym: ${value}`))
  }
  return value
}

const parseLiteral = (i18n) => (ast) => {
  if (ast.kind !== Kind.STRING) {
    throw new GraphQLError(
      i18n._(t`Can only validate strings as acronyms but got a: ${ast.kind}`),
    )
  }
  return validate(i18n)(ast.value)
}

const Acronym = (i18n) =>
  new GraphQLScalarType({
    name: 'Acronym',
    description: i18n._(
      t`A field whose value is an upper case letter or an under score that has a length between 1 and 50.`,
    ),
    serialize: validate(i18n),
    parseValue: validate(i18n),
    parseLiteral: parseLiteral(i18n),
  })

module.exports = {
  Acronym,
}
