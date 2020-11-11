const { userType } = require('../../types')

const findMe = {
  type: userType,
  description: 'Query the currently logged in user.',
  resolve: async (_, __, { auth: { userRequired } }) => {
    // Get querying user
    const user = await userRequired()

    user.id = user._key

    return user
  },
}

module.exports = {
  findMe,
}