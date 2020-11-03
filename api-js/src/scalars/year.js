const { t } = require('@lingui/macro')
const { GraphQLScalarType, Kind, GraphQLError } = require('graphql')

const validate = (i18n) => (value) => {
  const YEAR_REGEX = /^\d{4}$/

  if (typeof value !== 'string') {
    throw new TypeError(i18n._(t`Value is not string: ${typeof value}`))
  }

  if (!YEAR_REGEX.test(value)) {
    throw new TypeError(i18n._(t`Value is not a valid year: ${value}`))
  }
  return value
}

const parseLiteral = (i18n) => (ast) => {
  if (ast.kind !== Kind.STRING) {
    throw new GraphQLError(
      i18n._(t`Can only validate strings as year but got a: ${ast.kind}`),
    )
  }
  return validate(i18n)(ast.value)
}

const Year = (i18n) =>
  new GraphQLScalarType({
    name: 'Year',
    description: i18n._(t`A field that conforms to a 4 digit integer.`),
    serialize: validate(i18n),
    parseValue: validate(i18n),
    parseLiteral: parseLiteral(i18n),
  })

module.exports = {
  Year,
}
