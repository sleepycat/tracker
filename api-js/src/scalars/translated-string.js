const { Kind, GraphQLError, GraphQLScalarType } = require('graphql')
const { t } = require('@lingui/macro')

const validate = (i18n) => (value) => {
  if (typeof value !== 'string') {
    throw new TypeError(
      i18n._(t`String cannot represent a non string value: ${typeof value}`),
    )
  }

  return value
}

const parseLiteral = (i18n) => (ast) => {
  if (ast.kind !== Kind.STRING) {
    throw new GraphQLError(
      i18n._(t`String cannot represent a non string value: ${ast.kind}`),
    )
  }
  return validate(i18n)(ast.value)
}

const TranslatedString = (i18n) =>
  new GraphQLScalarType({
    name: 'TranslatedString',
    description: i18n._(
      t`The \`String\` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.`,
    ),
    serialize: validate(i18n),
    parseValue: validate(i18n),
    parseLiteral: parseLiteral(i18n),
  })

module.exports = {
  TranslatedString,
}
