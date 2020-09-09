const DataLoader = require('dataloader')

module.exports.userLoaderByUserName = (query) =>
  new DataLoader(async (userNames) => {
    let cursor

    try {
      cursor = await query`
        FOR user IN users
          FILTER ${userNames}[** FILTER CURRENT == user.userName]
          RETURN user
      `
    } catch (err) {
      console.error(
        `Database error occurred when running userLoaderByUserName: ${err}`,
      )
      throw new Error('Unable to find user. Please try again.')
    }

    const userMap = {}
    try {
      await cursor.each((user) => {
        userMap[user.userName] = user
      })
    } catch (err) {
      console.error(`Cursor error occurred during userLoaderByUserName: ${err}`)
      throw new Error('Unable to find user. Please try again.')
    }

    return userNames.map((userName) => userMap[userName])
  })