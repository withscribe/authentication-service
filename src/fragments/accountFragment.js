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
