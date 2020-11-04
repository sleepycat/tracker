const { GraphQLNonNull } = require('graphql')
const { mutationWithClientMutationId } = require('graphql-relay')
const { t } = require('@lingui/macro')
const { LanguageEnums } = require('../../enums')
const { authResultType } = require('../../types')
const { TranslatedString, EmailAddress } = require('../../scalars')

const signUp = (i18n) =>
  new mutationWithClientMutationId({
    name: 'SignUp',
    description: i18n._(
      t`This mutation allows for new users to sign up for our sites services.`,
    ),
    inputFields: () => ({
      displayName: {
        type: GraphQLNonNull(TranslatedString(i18n)),
        description: i18n._(t`The name that will be displayed to other users.`),
      },
      userName: {
        type: GraphQLNonNull(EmailAddress(i18n)),
        description: i18n._(
          t`Email address that the user will use to authenticate with.`,
        ),
      },
      password: {
        type: GraphQLNonNull(TranslatedString(i18n)),
        description: i18n._(t`The password the user will authenticate with.`),
      },
      confirmPassword: {
        type: GraphQLNonNull(TranslatedString(i18n)),
        description: i18n._(
          t`A secondary password field used to confirm the user entered the correct password.`,
        ),
      },
      preferredLang: {
        type: GraphQLNonNull(LanguageEnums(i18n)),
        description: i18n._(t`The users preferred language.`),
      },
      signUpToken: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`A token sent by email, that will assign a user to an organization with a pre-determined role.`,
        ),
      },
    }),
    outputFields: () => ({
      authResult: {
        type: authResultType,
        description: i18n._(t`The authenticated users information, and JWT.`),
        resolve: async ({ authResult }) => {
          return authResult
        },
      },
    }),
    mutateAndGetPayload: async (
      args,
      {
        i18n,
        query,
        auth: { tokenize, bcrypt },
        loaders: { userLoaderByUserName },
        validators: { cleanseInput },
      },
    ) => {
      // Cleanse Inputs
      const displayName = cleanseInput(args.displayName)
      const userName = cleanseInput(args.userName).toLowerCase()
      const password = cleanseInput(args.password)
      const confirmPassword = cleanseInput(args.confirmPassword)
      const preferredLang = cleanseInput(args.preferredLang)

      // Check to make sure password meets length requirement
      if (password.length < 12) {
        console.warn(
          `User: ${userName} tried to sign up but did not meet requirements.`,
        )
        throw new Error(i18n._(t`Password is too short.`))
      }

      // Check that password and password confirmation match
      if (password !== confirmPassword) {
        console.warn(
          `User: ${userName} tried to sign up but passwords do not match.`,
        )
        throw new Error(i18n._(t`Passwords do not match.`))
      }

      // Check to see if user already exists
      const checkUser = await userLoaderByUserName.load(userName)

      if (typeof checkUser !== 'undefined') {
        console.warn(
          `User: ${userName} tried to sign up, however there is already an account in use with that username.`,
        )
        throw new Error(i18n._(t`Username already in use.`))
      }

      // Hash Users Password
      const hashedPassword = bcrypt.hashSync(password, 10)

      // Create User Structure for insert
      const user = {
        displayName: displayName,
        userName: userName,
        password: hashedPassword,
        preferredLang: preferredLang,
        tfaValidated: false,
        emailValidated: false,
        failedLoginAttempts: 0,
      }

      let insertedCursor, insertedUser
      try {
        insertedCursor = await query`
        INSERT ${user} INTO users RETURN NEW
      `
      } catch (err) {
        console.error(
          `Database error occurred when ${userName} tried to sign up: ${err}`,
        )
        throw new Error(i18n._(t`Unable to sign up. Please try again.`))
      }

      try {
        insertedUser = await insertedCursor.next()
      } catch (err) {
        console.error(
          `Cursor error occurred when trying to get new user ${userName}: ${err}`,
        )
        throw new Error(i18n._(t`Unable to sign up. Please try again.`))
      }

      // Assign global id
      insertedUser.id = insertedUser._key

      // Generate JWT
      const token = tokenize({ parameters: { userId: insertedUser._key } })

      console.info(`User: ${userName} successfully created a new account.`)

      return {
        authResult: {
          token,
          user: insertedUser,
        },
      }
    },
  })

module.exports = {
  signUp,
}
