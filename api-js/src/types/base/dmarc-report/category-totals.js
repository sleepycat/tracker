const { GraphQLObjectType } = require('graphql')
const { t } = require('@lingui/macro')
const { TranslatedInt } = require('../../../scalars')

const categoryTotalsType = (i18n) =>
  new GraphQLObjectType({
    name: 'CategoryTotals',
    description: i18n._(
      t`This object displays the total amount of messages that fit into each category.`,
    ),
    fields: () => ({
      passSpfOnly: {
        type: TranslatedInt(i18n),
        description: i18n._(
          t`Amount of messages that are passing SPF, but failing DKIM.`,
        ),
        resolve: ({ passSpfOnly }) => passSpfOnly,
      },
      passDkimOnly: {
        type: TranslatedInt(i18n),
        description: i18n._(
          t`Amount of messages that are passing DKIM, but failing SPF.`,
        ),
        resolve: ({ passDkimOnly }) => passDkimOnly,
      },
      fullPass: {
        type: TranslatedInt(i18n),
        description: i18n._(
          t`Amount of messages that are passing SPF and DKIM.`,
        ),
        resolve: ({ fullPass }) => fullPass,
      },
      fail: {
        type: TranslatedInt(i18n),
        description: i18n._(t`Amount of messages that fail both SPF and DKIM.`),
        resolve: ({ fail }) => fail,
      },
    }),
  })

module.exports = {
  categoryTotalsType,
}
