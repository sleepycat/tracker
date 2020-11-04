const { GraphQLObjectType } = require('graphql')
const { t } = require('@lingui/macro')
const { userType } = require('./base')
const { TranslatedString } = require('../scalars')

const authResultType = (i18n) => new GraphQLObjectType({
  name: 'AuthResult',
  description: i18n._(t`An object used to return information when users sign up or authenticate.`),
  fields: () => ({
    authToken: {
      type: TranslatedString(i18n),
      description: i18n._(t`JWT used for accessing controlled content.`),
      resolve: async ({ token }) => {
        return token
      },
    },
    user: {
      type: userType(i18n),
      description: i18n._(t`User that has just been created or signed in.`),
      resolve: async ({ user }) => {
        return user
      },
    },
  }),
})

module.exports = {
  authResultType,
}
