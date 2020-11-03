const { t } = require('@lingui/macro')
const { Kind, GraphQLError, GraphQLScalarType } = require('graphql')

const validate = (i18n) => (value) => {
  const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

  if (typeof value !== 'string') {
    throw new TypeError(i18n._(t`Value is not string: ${typeof value}`))
  }

  if (!SLUG_REGEX.test(value)) {
    throw new TypeError(i18n._(t`Value is not a valid slug: ${value}`))
  }
  return value
}

const parseLiteral = (i18n) => (ast) => {
  if (ast.kind !== Kind.STRING) {
    throw new GraphQLError(
      i18n._(t`Can only validate strings as slug but got a: ${ast.kind}`),
    )
  }
  return validate(i18n)(ast.value)
}

const Slug = (i18n) =>
  new GraphQLScalarType({
    name: 'Slug',
    description: i18n._(
      t`A field who's values contain numbers, letters, dashes, and underscores.`,
    ),
    serialize: validate(i18n),
    parseValue: validate(i18n),
    parseLiteral: parseLiteral(i18n),
  })

module.exports = {
  Slug,
}
