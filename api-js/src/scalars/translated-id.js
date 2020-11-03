const { Kind, GraphQLError, GraphQLScalarType } = require('graphql')
const { t } = require('@lingui/macro')

const validate = (i18n) => (value) => {
  if (typeof value !== 'string' && typeof value !== 'number') {
    throw new TypeError(
      i18n._(t`ID cannot represent a non string value: ${typeof value}`),
    )
  }

  if (typeof value === 'string') return value
  else return value.toString()
}

const parseLiteral = (i18n) => (ast) => {
  if (ast.kind !== Kind.STRING && ast.kind !== Kind.INT) {
    throw new GraphQLError(
      i18n._(
        t`ID cannot represent a non-string and non-integer value:  ${ast.kind}`,
      ),
    )
  }
  if (ast.kind === Kind.STRING) return validate(i18n)(ast.value)
  else return validate(i18n)(Number(ast.value))
}

const TranslatedID = (i18n) =>
  new GraphQLScalarType({
    name: 'TranslatedID',
    description: i18n._(
      t`The \`ID\` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as \`"4"\`) or integer (such as \`4\`) input value will be accepted as an ID.`,
    ),
    serialize: validate(i18n),
    parseValue: validate(i18n),
    parseLiteral: parseLiteral(i18n),
  })

module.exports = {
  TranslatedID,
}
