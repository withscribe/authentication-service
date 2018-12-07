class AuthError extends Error {
  constructor(message, ...params) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthError)
    }

    this.message = message
    this.date = new Date()
  }
}

class LoginError extends Error {
  constructor(message, info, context, ...params) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, LoginError)
    }

    this.message = message
    this.info = info
    this.context = context
    this.date = new Date()
  }
}

module.exports = {
  AuthError,
  LoginError
}