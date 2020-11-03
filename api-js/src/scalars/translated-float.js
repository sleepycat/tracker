const { Kind, GraphQLError, GraphQLScalarType } = require('graphql')
const { t } = require('@lingui/macro')

const isFloat = (n) => {
  return Number(n) === n && n % 1 !== 0
}

const validate = (i18n) => (value) => {
  if (!isFloat(value)) {
    throw new TypeError(
      i18n._(t`Float cannot represent non numeric value: ${typeof value}`),
    )
  }

  return value
}

const parseLiteral = (i18n) => (ast) => {
  if (ast.kind !== Kind.FLOAT) {
    throw new GraphQLError(
      i18n._(t`Float cannot represent non numeric value: ${ast.kind}`),
    )
  }
  return validate(i18n)(Number(ast.value))
}

const TranslatedFloat = (i18n) =>
  new GraphQLScalarType({
    name: 'TranslatedFloat',
    description: i18n._(
      t`The \`Float\` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).`,
    ),
    serialize: validate(i18n),
    parseValue: validate(i18n),
    parseLiteral: parseLiteral(i18n),
  })

module.exports = {
  TranslatedFloat,
}
