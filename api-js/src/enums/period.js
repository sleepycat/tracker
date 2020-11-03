const { GraphQLEnumType } = require('graphql')
const { t } = require('@lingui/macro')

const PeriodEnums = (i18n) =>
  new GraphQLEnumType({
    name: 'PeriodEnums',
    values: {
      JANUARY: {
        value: 'january',
        description: i18n._(t`The month of January.`),
      },
      FEBRUARY: {
        value: 'february',
        description: i18n._(t`The month of February.`),
      },
      MARCH: {
        value: 'march',
        description: i18n._(t`The month of March.`),
      },
      APRIL: {
        value: 'april',
        description: i18n._(t`The month of April.`),
      },
      MAY: {
        value: 'may',
        description: i18n._(t`The month of May.`),
      },
      JUNE: {
        value: 'june',
        description: i18n._(t`The month of June.`),
      },
      JULY: {
        value: 'july',
        description: i18n._(t`The month of July.`),
      },
      AUGUST: {
        value: 'august',
        description: i18n._(t`The month of August.`),
      },
      SEPTEMBER: {
        value: 'september',
        description: i18n._(t`The month of September.`),
      },
      OCTOBER: {
        value: 'october',
        description: i18n._(t`The month of October.`),
      },
      NOVEMBER: {
        value: 'november',
        description: i18n._(t`The month of November.`),
      },
      DECEMBER: {
        value: 'december',
        description: i18n._(t`The month of December.`),
      },
      LAST30DAYS: {
        value: 'last30days',
        description: i18n._(t`The last 30 days.`),
      },
    },
    description: i18n._(
      t`An enum used to select information from the dmarc-report-api.`,
    ),
  })

module.exports = {
  PeriodEnums,
}
