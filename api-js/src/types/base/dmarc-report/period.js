const { GraphQLObjectType } = require('graphql')
const { t } = require('@lingui/macro')

const { categoryPercentagesType } = require('./category-percentages')
const { categoryTotalsType } = require('./category-totals')
const { detailTablesType } = require('./detail-tables')
const { TranslatedString } = require('../../../scalars')

const periodType = (i18n) => new GraphQLObjectType({
  name: 'Period',
  description:
    i18n._(t`Object that contains information for each data collection period.`),
  fields: () => ({
    month: {
      type: TranslatedString(i18n),
      description: i18n._(t`Start date of data collection.`),
      resolve: ({ startDate }, _, { moment }) =>
        Number(moment(startDate).month()) + 1,
    },
    year: {
      type: TranslatedString(i18n),
      description: i18n._(t`End date of data collection.`),
      resolve: ({ startDate }, _, { moment }) => moment(startDate).year(),
    },
    categoryPercentages: {
      type: categoryPercentagesType(i18n),
      description: i18n._(t`Category percentages based on the category totals.`),
      resolve: ({ categoryTotals }) => categoryTotals,
    },
    categoryTotals: {
      type: categoryTotalsType(i18n),
      description: i18n._(t`Category totals for quick viewing.`),
      resolve: ({ categoryTotals }) => categoryTotals,
    },
    detailTables: {
      type: detailTablesType(i18n),
      description: i18n._(t`Various senders for each category.`),
      resolve: ({ detailTables }) => detailTables,
    },
  }),
})

module.exports = {
  periodType,
}
