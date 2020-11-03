const { t } = require('@lingui/macro')
const { Kind, GraphQLError, GraphQLScalarType } = require('graphql')
const psl = require('psl')

const validate = (i18n) => (value) => {
  if (typeof value !== typeof 'string') {
    throw new TypeError(i18n._(t`Value is not a string: ${typeof value}`))
  }
  if (!psl.isValid(value)) {
    throw new TypeError(i18n._(t`Value is not a valid domain: ${value}`))
  }

  return value
}

const parseLiteral = (i18n) => (ast) => {
  if (ast.kind !== Kind.STRING) {
    throw new GraphQLError(
      i18n._(t`Can only validate strings as domains but got a: ${ast.kind}`),
    )
  }
  return validate(i18n)(ast.value)
}

const Domain = (i18n) => new GraphQLScalarType({
  name: 'DomainScalar',
  description: i18n._(t`String that conforms to a domain structure.`),
  serialize: validate(i18n),
  parseValue: validate(i18n),
  parseLiteral: parseLiteral(i18n),
})


module.exports = {
  Domain,
}