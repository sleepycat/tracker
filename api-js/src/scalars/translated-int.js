const { Kind, GraphQLError, GraphQLScalarType } = require('graphql')
const { t } = require('@lingui/macro')

const MAX_INT = 2147483647
const MIN_INT = -2147483648

const validate = (i18n) => (value) => {
  if (!Number.isInteger(value)) {
    throw new TypeError(i18n._(t`Int cannot represent non-integer value: ${typeof value}`))
  }

  if (value > MAX_INT || value < MIN_INT) {
    throw new TypeError(i18n._(t`Int cannot represent non 32-bit signed integer value: ${value}`))
  }

  return value
}

const parseLiteral = (i18n) => (ast) => {
  if (ast.kind !== Kind.INT) {
    throw new GraphQLError(
      i18n._(t`Int cannot represent non-integer value: ${ast.kind}`),
    )
  }
  return validate(i18n)(Number(ast.value))
}

const TranslatedInt = (i18n) => new GraphQLScalarType({
  name: 'TranslatedInt',
  description: i18n._(t`The \`Int\` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.`),
  serialize: validate(i18n),
  parseValue: validate(i18n),
  parseLiteral: parseLiteral(i18n),
})

module.exports = {
  TranslatedInt,
}