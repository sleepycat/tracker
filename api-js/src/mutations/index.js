const { GraphQLObjectType } = require('graphql')
const { t } = require('@lingui/macro')
const { createDomain, removeDomain, updateDomain } = require('./domain')
const {
  createOrganization,
  removeOrganization,
  updateOrganization,
} = require('./organizations')
const { requestScan } = require('./scans')
const {
  authenticate,
  resetPassword,
  sendEmailVerification,
  sendPasswordResetLink,
  sendPhoneCode,
  signIn,
  signUp,
  updateUserPassword,
  updateUserProfile,
  verifyAccount,
  verifyPhoneNumber,
} = require('./user')
const { inviteUserToOrg, updateUserRole } = require('./user-affiliations')

const createMutationSchema = (i18n) => {
  return new GraphQLObjectType({
    name: 'Mutation',
    description: i18n._(t`Root Mutation Object`),
    fields: () => ({
      // Domain Mutations
      createDomain: createDomain(i18n),
      removeDomain: removeDomain(i18n),
      updateDomain: updateDomain(i18n),
      // Organization Mutations
      createOrganization: createOrganization(i18n),
      removeOrganization: removeOrganization(i18n),
      updateOrganization: updateOrganization(i18n),
      // Scan Mutations
      requestScan: requestScan(i18n),
      // User Mutations
      authenticate: authenticate(i18n),
      resetPassword: resetPassword(i18n),
      sendEmailVerification: sendEmailVerification(i18n),
      sendPasswordResetLink: sendPasswordResetLink(i18n),
      sendPhoneCode: sendPhoneCode(i18n),
      signIn: signIn(i18n),
      signUp: signUp(i18n),
      updateUserPassword: updateUserPassword(i18n),
      updateUserProfile: updateUserProfile(i18n),
      verifyAccount: verifyAccount(i18n),
      verifyPhoneNumber: verifyPhoneNumber(i18n),
      // User Affiliations Mutations
      inviteUserToOrg: inviteUserToOrg(i18n),
      updateUserRole: updateUserRole(i18n),
    }),
  })
}

module.exports = {
  createMutationSchema,
}
