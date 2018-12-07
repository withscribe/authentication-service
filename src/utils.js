// Author: Austin Howlett
// Description: Verifies the access token

const jwt = require('jsonwebtoken')
const { AuthError } = require('./custom_errors/autherrors')

function verifyToken(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    return payload
  }

  throw new AuthError("[ERROR] User Not Authorized - 401")
}

module.exports = {
  verifyToken,
}