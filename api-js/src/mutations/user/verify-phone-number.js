const { GraphQLNonNull } = require('graphql')
const { mutationWithClientMutationId } = require('graphql-relay')
const { t } = require('@lingui/macro')
const { TranslatedString, TranslatedInt } = require('../../scalars')

const verifyPhoneNumber = (i18n) =>
  new mutationWithClientMutationId({
    name: 'verifyPhoneNumber',
    description: i18n._(
      t`This mutation allows the user to two factor authenticate.`,
    ),
    inputFields: () => ({
      twoFactorCode: {
        type: GraphQLNonNull(TranslatedInt(i18n)),
        description: i18n._(
          t`The two factor code that was received via text message.`,
        ),
      },
    }),
    outputFields: () => ({
      status: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`The status of verifying the two factor authentication.`,
        ),
        resolve: async (payload) => {
          return payload.status
        },
      },
    }),
    mutateAndGetPayload: async (
      args,
      { i18n, query, userId, loaders: { userLoaderByKey } },
    ) => {
      // Cleanse Input
      const twoFactorCode = args.twoFactorCode

      if (typeof userId === 'undefined') {
        console.warn(
          `User attempted to two factor authenticate, however the userId is undefined.`,
        )
        throw new Error(i18n._(t`Authentication error, please sign in again.`))
      }

      // Get User From DB
      const user = await userLoaderByKey.load(userId)

      if (typeof user === 'undefined') {
        console.warn(
          `User: ${userId} attempted to two factor authenticate, however no account is associated with that id.`,
        )
        throw new Error(
          i18n._(t`Unable to two factor authenticate. Please try again.`),
        )
      }

      if (twoFactorCode.toString().length !== 6) {
        console.warn(
          `User: ${user._key} attempted to two factor authenticate, however the code they submitted does not have 6 digits.`,
        )
        throw new Error(
          i18n._(t`Unable to two factor authenticate. Please try again.`),
        )
      }

      // Check that TFA codes match
      if (twoFactorCode !== user.tfaCode) {
        console.warn(
          `User: ${user._key} attempted to two factor authenticate, however the tfa codes do not match.`,
        )
        throw new Error(
          i18n._(t`Unable to two factor authenticate. Please try again.`),
        )
      }

      // Update phoneValidated to be true
      try {
        await query`
        UPSERT { _key: ${user._key} }
          INSERT { phoneValidated: true }
          UPDATE { phoneValidated: true }
          IN users
      `
      } catch (err) {
        console.error(
          `Database error occurred when upserting the tfaValidate field for ${user._key}: ${err}`,
        )
        throw new Error(
          i18n._(t`Unable to two factor authenticate. Please try again.`),
        )
      }

      console.info(
        `User: ${user._key} successfully two factor authenticated their account.`,
      )

      return {
        status: i18n._(t`Successfully two factor authenticated.`),
      }
    },
  })

module.exports = {
  verifyPhoneNumber,
}
