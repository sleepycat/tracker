const { Kind, GraphQLError, GraphQLScalarType } = require('graphql')
const { t } = require('@lingui/macro')

const validate = (i18n) => (value) => {
  if (typeof value !== 'boolean') {
    throw new TypeError(
      i18n._(t`Boolean cannot represent a non boolean value: ${typeof value}`),
    )
  }

  return value
}

const parseLiteral = (i18n) => (ast) => {
  if (ast.kind !== Kind.BOOLEAN) {
    throw new GraphQLError(
      i18n._(t`Boolean cannot represent a non boolean value: ${ast.kind}`),
    )
  }
  return validate(i18n)(Boolean(ast.value))
}

const TranslatedBoolean = (i18n) =>
  new GraphQLScalarType({
    name: 'TranslatedBoolean',
    description: i18n._(
      t`The \`Boolean\` scalar type represents \`true\` or \`false\`.`,
    ),
    serialize: validate(i18n),
    parseValue: validate(i18n),
    parseLiteral: parseLiteral(i18n),
  })

module.exports = {
  TranslatedBoolean,
}
