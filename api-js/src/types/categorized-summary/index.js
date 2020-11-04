const { GraphQLObjectType, GraphQLList } = require('graphql')
const { t } = require('@lingui/macro')
const { TranslatedInt } = require('../../scalars')
const { summaryCategoryType } = require('./summary-category')

const categorizedSummaryType = (i18n) => new GraphQLObjectType({
  name: 'CategorizedSummary',
  fields: () => ({
    categories: {
      type: GraphQLList(summaryCategoryType(i18n)),
      description: i18n._(t`List of SummaryCategory objects with data for different computed categories.`),
      resolve: async () => {},
    },
    total: {
      type: TranslatedInt(i18n),
      description: i18n._(t`Total domains that were check under this summary.`),
      resolve: async () => {},
    },
  }),
  description: i18n._(t`This object contains the list of different categories for pre-computed
    summary data with the computed total for how many domains in total are
    being compared.`),
})

module.exports = {
  categorizedSummaryType,
}
