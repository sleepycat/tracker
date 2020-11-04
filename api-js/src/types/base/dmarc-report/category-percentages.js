const { GraphQLObjectType } = require('graphql')
const { t } = require('@lingui/macro')
const { TranslatedFloat, TranslatedInt } = require('../../../scalars')

const categoryPercentagesType = (i18n) =>
  new GraphQLObjectType({
    name: 'CategoryPercentages',
    description: i18n._(
      t`This object displays the percentages of the category totals.`,
    ),
    fields: () => ({
      failPercentage: {
        type: TranslatedFloat(i18n),
        description: i18n._(
          t`Percentage of messages that are failing all checks.`,
        ),
        resolve: ({ fail, fullPass, passDkimOnly, passSpfOnly }) => {
          const total = [fail, fullPass, passDkimOnly, passSpfOnly].reduce(
            (a, b) => a + b,
            0,
          )

          if (fail === 0) return 0

          const percentage = (fail / total) * 100
          return percentage.toFixed(2)
        },
      },
      fullPassPercentage: {
        type: TranslatedFloat(i18n),
        description: i18n._(
          t`Percentage of messages that are passing all checks.`,
        ),
        resolve: ({ fail, fullPass, passDkimOnly, passSpfOnly }) => {
          const total = [fail, fullPass, passDkimOnly, passSpfOnly].reduce(
            (a, b) => a + b,
            0,
          )

          if (fullPass === 0) return 0

          const percentage = (fullPass / total) * 100
          return percentage.toFixed(2)
        },
      },
      passDkimOnlyPercentage: {
        type: TranslatedFloat(i18n),
        description: i18n._(
          t`Percentage of messages that are passing only dkim.`,
        ),
        resolve: ({ fail, fullPass, passDkimOnly, passSpfOnly }) => {
          const total = [fail, fullPass, passDkimOnly, passSpfOnly].reduce(
            (a, b) => a + b,
            0,
          )

          if (passDkimOnly === 0) return 0

          const percentage = (passDkimOnly / total) * 100
          return percentage.toFixed(2)
        },
      },
      passSpfOnlyPercentage: {
        type: TranslatedFloat(i18n),
        description: i18n._(
          t`Percentage of messages that are passing only spf.`,
        ),
        resolve: ({ fail, fullPass, passDkimOnly, passSpfOnly }) => {
          const total = [fail, fullPass, passDkimOnly, passSpfOnly].reduce(
            (a, b) => a + b,
            0,
          )

          if (passSpfOnly === 0) return 0

          const percentage = (passSpfOnly / total) * 100
          return percentage.toFixed(2)
        },
      },
      totalMessages: {
        type: TranslatedInt(i18n),
        description: i18n._(
          t`The total amount of messages sent by this domain.`,
        ),
        resolve: ({ fail, fullPass, passDkimOnly, passSpfOnly }) => {
          const total = [fail, fullPass, passDkimOnly, passSpfOnly].reduce(
            (a, b) => a + b,
            0,
          )
          return total
        },
      },
    }),
  })

module.exports = {
  categoryPercentagesType,
}
