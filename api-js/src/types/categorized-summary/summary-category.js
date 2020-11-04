const { GraphQLObjectType } = require('graphql')
const { t } = require('@lingui/macro')

const {
  TranslatedString,
  TranslatedInt,
  TranslatedFloat,
} = require('../../scalars')

const summaryCategoryType = (i18n) =>
  new GraphQLObjectType({
    name: 'SummaryCategory',
    fields: () => ({
      name: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`Category of computed summary which the other fields relate to.`,
        ),
        resolve: async () => {},
      },
      count: {
        type: TranslatedInt(i18n),
        description: i18n._(
          t`Total count of domains that fall into this category.`,
        ),
        resolve: async () => {},
      },
      percentage: {
        type: TranslatedFloat(i18n),
        description: i18n._(t`Percentage compared to other categories.`),
        resolve: async () => {},
      },
    }),
    description: i18n._(
      t`This object contains the information for each type of summary that has been pre-computed`,
    ),
  })

module.exports = {
  summaryCategoryType,
}
