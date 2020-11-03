const { GraphQLEnumType } = require('graphql')
const { t } = require('@lingui/macro')

const RoleEnums = (i18n) =>
  new GraphQLEnumType({
    name: 'RoleEnums',
    values: {
      USER: {
        value: 'user',
        description: i18n._(
          t`A user who has been given access to view an organization.`,
        ),
      },
      ADMIN: {
        value: 'admin',
        description: i18n._(
          t`A user who has the same access as a user write account, but can define new user read/write accounts.`,
        ),
      },
      SUPER_ADMIN: {
        value: 'super_admin',
        description: i18n._(
          t`A user who has the same access as an admin, but can define new admins.`,
        ),
      },
    },
    description: i18n._(t`An enum used to assign, and test users roles.`),
  })

module.exports = {
  RoleEnums,
}
