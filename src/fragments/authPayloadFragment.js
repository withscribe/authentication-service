const authPayloadFragment = `
  fragment authPayloadFragment on AuthPayload {
    token
    refreshToken
    account {
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
  }
`

module.exports = { authPayloadFragment };