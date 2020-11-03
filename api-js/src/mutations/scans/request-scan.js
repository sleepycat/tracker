const { mutationWithClientMutationId } = require('graphql-relay')
const { t } = require('@lingui/macro')
const { ScanTypeEnums } = require('../../enums')
const { Slug, TranslatedString } = require('../../scalars')

const requestScan = (i18n) =>
  new mutationWithClientMutationId({
    name: 'RequestScan',
    description: i18n._(
      t`This mutation is used to run a manual scan on a requested domain.`,
    ),
    inputFields: () => ({
      urlSlug: {
        type: Slug(i18n),
        description: i18n._(t`The domain that the scan will be ran on.`),
      },
      scanType: {
        type: ScanTypeEnums(i18n),
        description: i18n._(
          t`Type of scan to preform on the requested domain ('WEB' or 'MAIL').`,
        ),
      },
    }),
    outputFields: () => ({
      status: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`Informs the user if the scan was dispatched successfully.`,
        ),
        resolve: async () => {},
      },
    }),
    mutateAndGetPayload: async () => {},
  })

module.exports = {
  requestScan,
}
