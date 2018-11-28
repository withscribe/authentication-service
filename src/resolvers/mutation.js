// Author: Austin Howlett
// Description: Responsible for resolving all mutation (in realtion to REST this would be POST,PUT,PATCH,DELETE) schema endpoints (business logic)

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../utils')
const { accountFragment } = require("../fragments/accountFragment");

// NEED TO REFACTOR AUTH METHODS TO ADD FRAGMENT
const { authPayloadFragment } = require("../fragments/authPayloadFragment");

// TODO: Need to find a better way to store refresh tokens
const tokenList = {}

registerAccount = async (parent, args, context, info) => {
  const password = await bcrypt.hash(args.password, 10)

  const account = await context.prisma.createAccount({
    email: args.email,
    password: password,
    roles: {
      create: [
        {
          role: "REGULAR",
          desc: "Default User Role"
        }
      ]
    }
  }, ` { id, email } `)

  const token = jwt.sign({ accountId: account.id, email: account.email }, process.env.TOKEN_SECRET, { expiresIn: '1h' })
  const refreshToken = jwt.sign({ accountId: account.id, email: account.email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1h' })

  const tokensToPersist = {
      "token": token,
      "refreshToken": refreshToken
  }

  tokenList[refreshToken] = tokensToPersist

  return {
    token,
    refreshToken,
    account,
  }
}

login = async (parent, args, context, info) => {
  const account = await context.prisma.account({ email: args.email }, ` { id, email, password } ` )

  if(!account) {
    return {
      error: {
        field: 'email',
        msg: 'No User Found'
      }
    }
  }

  // If user wishes to remember login creds, update flag on account
  if(args.rememberMe)
    await context.prisma.updateAccount({ where: { id: account.id }, data: { rememberMe: args.rememberMe }})

  // TODO: Make sure bcrypt is all we need

  const valid = await bcrypt.compare(args.password, account.password)

  if(!valid) {
    throw new Error("User Not Found:" + info + " : " + context)
  }


  const token = jwt.sign({ accountId: account.id, email: account.email }, process.env.TOKEN_SECRET, { expiresIn: '7d' })
  const refreshToken = jwt.sign({ accountId: account.id, email: account.emaill }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })

  const tokensToPersist = {
    "token": token,
    "refreshToken": refreshToken
  }

  tokenList[refreshToken] = tokensToPersist

  return {
    token,
    refreshToken,
    account,
  }
}

refresh = async (_, args, context, info) => {

  if((args.refreshToken) && (args.refreshToken in tokenList)) {

    const account = await context.prisma.account({ email: args.email }, ` { id, email } ` )

    const token = jwt.sign({ accountId: account.id, email: account.email }, process.env.TOKEN_SECRET, { expiresIn: config.tokenLife })

    tokenList[args.refreshToken].token = token;

    return {
      token,
      account
    }

  } else {
    // TODO: Return a proper http response (401)
    throw new Error("Invalid Token:" + info + " : " + context)
  }
}

createAccountConnect = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.createAccount({
    email: args.email,
    password: args.email,
    acountState: args.state,
    country: args.county,
    roles: {
      connect: [
        { id: args.roleId }
      ]
    },
    profileId: args.profileId
  }).$fragment(accountFragment)
}

createAccountCreate = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.createAccount({
    email: args.email,
    password: args.email,
    acountState: args.state,
    country: args.county,
    role: {
      create: [
        {
          role: args.role,
          desc:  args.desc
        }
      ]
    },
    profileId: args.profileId
  }).$fragment(accountFragment)
}

updateAccountCreate = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.updateAccount({
    where: {
      id: payload.accountId
    },
    data: {
      email: args.email,
      password: args.password,
      accountState: args.state,
      country: args.country,
    }
  }).$fragment(accountFragment)
}

removeAccount = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.deleteAccount({ id: args.id })
    .$fragment(accountFragment)
}

    // UNPROTECTED RESOLVER NEEDS ATTENTION!!
attachProfileToAccount = async (_, args, context, info) => {
  return await context.prisma.updateAccount({
    where: {
      id: args.accountId
    },
    data: {
      profileID: args.profileID
    }
  }).$fragment(accountFragment)
}

createRole = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.createRole({
    role: args.role,
    desc: args.desc
  })
}

updateState = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.updateAccount({
    where: {
      id: args.accountId
    },
    data: {
      accountState: args.state
    },
    info
  }).$fragment(accountFragment)
}

flagAccount = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.updateAccount({
    where: {
      id: args.accountId
    },
    data: {
      accountState: "FLAGGED"
    }
  }).$fragment(accountFragment)
}

banAccount = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.updateAccount({
    where: {
      id: args.accountId
    },
    data: {
      accountState: "BANNED"
    }
  }).$fragment(accountFragment)
}


module.exports = {
  registerAccount,
  login,
  refresh,
  attachProfileToAccount,
  createAccountConnect,
  createAccountCreate,
  updateAccountCreate,
  removeAccount,
  createRole,
  updateState,
  flagAccount,
  banAccount,
}