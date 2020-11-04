const { t } = require('@lingui/macro')
const { categorizedSummaryType } = require('../../types')

const emailSummary = (i18n) => ({
  type: categorizedSummaryType(i18n),
  description: i18n._(
    t`Email summary computed values, used to build summary cards.`,
  ),
  resolve: async () => {},
})

module.exports = {
  emailSummary,
}
