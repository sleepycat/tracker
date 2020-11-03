const { GraphQLEnumType } = require('graphql')
const { t } = require('@lingui/macro')

const LanguageEnums = (i18n) =>
  new GraphQLEnumType({
    name: 'LanguageEnums',
    values: {
      ENGLISH: {
        value: 'english',
        description: i18n._(
          t`Used for defining if English is the preferred language.`,
        ),
      },
      FRENCH: {
        value: 'french',
        description: i18n._(
          t`Used for defining if French is the preferred language.`,
        ),
      },
    },
    description: i18n._(t`An enum used to define user's language.`),
  })

module.exports = {
  LanguageEnums,
}
