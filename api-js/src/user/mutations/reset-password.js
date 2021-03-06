import { GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import { t } from '@lingui/macro'

export const resetPassword = new mutationWithClientMutationId({
  name: 'ResetPassword',
  description:
    'This mutation allows the user to take the token they received in their email to reset their password.',
  inputFields: () => ({
    password: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The users new password.',
    },
    confirmPassword: {
      type: GraphQLNonNull(GraphQLString),
      description: 'A confirmation password to confirm the new password.',
    },
    resetToken: {
      type: GraphQLNonNull(GraphQLString),
      description:
        'The JWT found in the url, redirected from the email they received.',
    },
  }),
  outputFields: () => ({
    status: {
      type: GraphQLString,
      description:
        'Informs the user if the password reset was successful, and to redirect to sign in page.',
      resolve: async (payload) => {
        return payload.status
      },
    },
  }),
  mutateAndGetPayload: async (
    args,
    {
      i18n,
      query,
      auth: { verifyToken, bcrypt },
      loaders: { userLoaderByKey },
      validators: { cleanseInput },
    },
  ) => {
    // Cleanse input
    const password = cleanseInput(args.password)
    const confirmPassword = cleanseInput(args.confirmPassword)
    const resetToken = cleanseInput(args.resetToken)

    // Check if reset token is valid
    const tokenParameters = verifyToken({ token: resetToken })

    // Check to see if user id exists in token params !!!
    if (
      tokenParameters.userKey === 'undefined' ||
      typeof tokenParameters.userKey === 'undefined'
    ) {
      console.warn(
        `When resetting password user attempted to verify account, but userKey is not located in the token parameters.`,
      )
      throw new Error(i18n._(t`Unable to reset password. Please try again.`))
    }

    // Check if user exists
    const user = await userLoaderByKey.load(tokenParameters.userKey)

    if (typeof user === 'undefined') {
      console.warn(
        `A user attempted to reset the password for ${tokenParameters.userKey}, however there is no associated account.`,
      )
      throw new Error(i18n._(t`Unable to reset password. Please try again.`))
    }

    // Check if password in token matches token in db
    if (tokenParameters.currentPassword !== user.password) {
      console.warn(
        `User: ${user._key} attempted to reset password, however the current password does not match the current hashed password in the db.`,
      )
      throw new Error(i18n._(t`Unable to reset password. Please try again.`))
    }

    // Check to see if newly submitted passwords match
    if (password !== confirmPassword) {
      console.warn(
        `User: ${user._key} attempted to reset their password, however the submitted passwords do not match.`,
      )
      throw new Error(i18n._(t`New passwords do not match. Please try again.`))
    }

    // Check to see if password meets GoC requirements
    if (password.length < 12) {
      console.warn(
        `User: ${user._key} attempted to reset their password, however the submitted password is not long enough.`,
      )
      throw new Error(
        i18n._(t`Password is not strong enough. Please try again.`),
      )
    }

    // Update users password in db
    const hashedPassword = bcrypt.hashSync(password, 10)

    try {
      await query`
        FOR user IN users
          UPDATE ${user._key} WITH { password: ${hashedPassword} } IN users
      `
    } catch (err) {
      console.error(
        `Database error ocurred when user: ${user._key} attempted to reset their password: ${err}`,
      )
      throw new Error(i18n._(t`Unable to reset password. Please try again.`))
    }

    console.info(`User: ${user._key} successfully reset their password.`)

    return {
      status: i18n._(t`Password was successfully reset.`),
    }
  },
})
