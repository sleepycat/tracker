const { GraphQLEnumType } = require('graphql')
const { t } = require('@lingui/macro')

const ScanTypeEnums = (i18n) =>
  new GraphQLEnumType({
    name: 'ScanTypeEnums',
    values: {
      MAIL: {
        value: 'mail',
        description: i18n._(
          t`Used for defining if DMARC and DKIM scans should be preformed.`,
        ),
      },
      WEB: {
        value: 'web',
        description: i18n._(
          t`Used for defining if HTTPS and SSL scans should be preformed.`,
        ),
      },
    },
    description: i18n._(
      t`Enum used when requesting a manual scan to determine what type of scan is to be ran.`,
    ),
  })

module.exports = {
  ScanTypeEnums,
}
