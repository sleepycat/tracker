const { t } = require('@lingui/macro')
const { categorizedSummaryType } = require('../../types')

const webSummary = (i18n) => ({
  type: categorizedSummaryType(i18n),
  description: i18n._(
    t`Web summary computed values, used to build summary cards.`,
  ),
  resolve: async () => {},
})

module.exports = {
  webSummary,
}
