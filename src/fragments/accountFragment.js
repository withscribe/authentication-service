// Author: Austin Howlett
// Description: Fragments ensure that, if requested, all of these fields will be returned

const accountFragment = `
  fragment accountFragment on Account {
    id
    email
    password
    rememberMe
    accountState
    country
    roles {
      id
      role
      desc
    }
    profileId
  }
`

module.exports = { accountFragment };
