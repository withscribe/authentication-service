module.exports = {
        typeDefs: /* GraphQL */ `type Account {
  id: ID!
  email: String!
  password: String!
  rememberMe: Boolean!
  accountState: State
  country: String
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
  profileID: ID
}

type AccountConnection {
  pageInfo: PageInfo!
  edges: [AccountEdge]!
  aggregate: AggregateAccount!
}

input AccountCreateInput {
  email: String!
  password: String!
  rememberMe: Boolean
  accountState: State
  country: String
  roles: RoleCreateManyInput
  profileID: ID
}

input AccountCreateOneInput {
  create: AccountCreateInput
  connect: AccountWhereUniqueInput
}

type AccountEdge {
  node: Account!
  cursor: String!
}

enum AccountOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  rememberMe_ASC
  rememberMe_DESC
  accountState_ASC
  accountState_DESC
  country_ASC
  country_DESC
  profileID_ASC
  profileID_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AccountPreviousValues {
  id: ID!
  email: String!
  password: String!
  rememberMe: Boolean!
  accountState: State
  country: String
  profileID: ID
}

type AccountSubscriptionPayload {
  mutation: MutationType!
  node: Account
  updatedFields: [String!]
  previousValues: AccountPreviousValues
}

input AccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AccountWhereInput
  AND: [AccountSubscriptionWhereInput!]
  OR: [AccountSubscriptionWhereInput!]
  NOT: [AccountSubscriptionWhereInput!]
}

input AccountUpdateDataInput {
  email: String
  password: String
  rememberMe: Boolean
  accountState: State
  country: String
  roles: RoleUpdateManyInput
  profileID: ID
}

input AccountUpdateInput {
  email: String
  password: String
  rememberMe: Boolean
  accountState: State
  country: String
  roles: RoleUpdateManyInput
  profileID: ID
}

input AccountUpdateOneInput {
  create: AccountCreateInput
  update: AccountUpdateDataInput
  upsert: AccountUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: AccountWhereUniqueInput
}

input AccountUpsertNestedInput {
  update: AccountUpdateDataInput!
  create: AccountCreateInput!
}

input AccountWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  rememberMe: Boolean
  rememberMe_not: Boolean
  accountState: State
  accountState_not: State
  accountState_in: [State!]
  accountState_not_in: [State!]
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
  profileID: ID
  profileID_not: ID
  profileID_in: [ID!]
  profileID_not_in: [ID!]
  profileID_lt: ID
  profileID_lte: ID
  profileID_gt: ID
  profileID_gte: ID
  profileID_contains: ID
  profileID_not_contains: ID
  profileID_starts_with: ID
  profileID_not_starts_with: ID
  profileID_ends_with: ID
  profileID_not_ends_with: ID
  AND: [AccountWhereInput!]
  OR: [AccountWhereInput!]
  NOT: [AccountWhereInput!]
}

input AccountWhereUniqueInput {
  id: ID
  email: String
  profileID: ID
}

type AggregateAccount {
  count: Int!
}

type AggregateAuthPayload {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AuthPayload {
  token: String
  refreshToken: String
  account: Account
  status: String
}

type AuthPayloadConnection {
  pageInfo: PageInfo!
  edges: [AuthPayloadEdge]!
  aggregate: AggregateAuthPayload!
}

input AuthPayloadCreateInput {
  token: String
  refreshToken: String
  account: AccountCreateOneInput
  status: String
}

type AuthPayloadEdge {
  node: AuthPayload!
  cursor: String!
}

enum AuthPayloadOrderByInput {
  token_ASC
  token_DESC
  refreshToken_ASC
  refreshToken_DESC
  status_ASC
  status_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AuthPayloadPreviousValues {
  token: String
  refreshToken: String
  status: String
}

type AuthPayloadSubscriptionPayload {
  mutation: MutationType!
  node: AuthPayload
  updatedFields: [String!]
  previousValues: AuthPayloadPreviousValues
}

input AuthPayloadSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AuthPayloadWhereInput
  AND: [AuthPayloadSubscriptionWhereInput!]
  OR: [AuthPayloadSubscriptionWhereInput!]
  NOT: [AuthPayloadSubscriptionWhereInput!]
}

input AuthPayloadUpdateInput {
  token: String
  refreshToken: String
  account: AccountUpdateOneInput
  status: String
}

input AuthPayloadWhereInput {
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  refreshToken: String
  refreshToken_not: String
  refreshToken_in: [String!]
  refreshToken_not_in: [String!]
  refreshToken_lt: String
  refreshToken_lte: String
  refreshToken_gt: String
  refreshToken_gte: String
  refreshToken_contains: String
  refreshToken_not_contains: String
  refreshToken_starts_with: String
  refreshToken_not_starts_with: String
  refreshToken_ends_with: String
  refreshToken_not_ends_with: String
  account: AccountWhereInput
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  AND: [AuthPayloadWhereInput!]
  OR: [AuthPayloadWhereInput!]
  NOT: [AuthPayloadWhereInput!]
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createAccount(data: AccountCreateInput!): Account!
  updateAccount(data: AccountUpdateInput!, where: AccountWhereUniqueInput!): Account
  updateManyAccounts(data: AccountUpdateInput!, where: AccountWhereInput): BatchPayload!
  upsertAccount(where: AccountWhereUniqueInput!, create: AccountCreateInput!, update: AccountUpdateInput!): Account!
  deleteAccount(where: AccountWhereUniqueInput!): Account
  deleteManyAccounts(where: AccountWhereInput): BatchPayload!
  createAuthPayload(data: AuthPayloadCreateInput!): AuthPayload!
  updateManyAuthPayloads(data: AuthPayloadUpdateInput!, where: AuthPayloadWhereInput): BatchPayload!
  deleteManyAuthPayloads(where: AuthPayloadWhereInput): BatchPayload!
  createRole(data: RoleCreateInput!): Role!
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateManyRoles(data: RoleUpdateInput!, where: RoleWhereInput): BatchPayload!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  account(where: AccountWhereUniqueInput!): Account
  accounts(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account]!
  accountsConnection(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccountConnection!
  authPayloads(where: AuthPayloadWhereInput, orderBy: AuthPayloadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AuthPayload]!
  authPayloadsConnection(where: AuthPayloadWhereInput, orderBy: AuthPayloadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthPayloadConnection!
  role(where: RoleWhereUniqueInput!): Role
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  node(id: ID!): Node
}

type Role {
  id: ID!
  role: Roles
  desc: String
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  role: Roles
  desc: String
}

input RoleCreateManyInput {
  create: [RoleCreateInput!]
  connect: [RoleWhereUniqueInput!]
}

type RoleEdge {
  node: Role!
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  role_ASC
  role_DESC
  desc_ASC
  desc_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RolePreviousValues {
  id: ID!
  role: Roles
  desc: String
}

enum Roles {
  REGULAR
  PREMIUM
  ADMIN
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
  AND: [RoleSubscriptionWhereInput!]
  OR: [RoleSubscriptionWhereInput!]
  NOT: [RoleSubscriptionWhereInput!]
}

input RoleUpdateDataInput {
  role: Roles
  desc: String
}

input RoleUpdateInput {
  role: Roles
  desc: String
}

input RoleUpdateManyInput {
  create: [RoleCreateInput!]
  update: [RoleUpdateWithWhereUniqueNestedInput!]
  upsert: [RoleUpsertWithWhereUniqueNestedInput!]
  delete: [RoleWhereUniqueInput!]
  connect: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
}

input RoleUpdateWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateDataInput!
}

input RoleUpsertWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateDataInput!
  create: RoleCreateInput!
}

input RoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  role: Roles
  role_not: Roles
  role_in: [Roles!]
  role_not_in: [Roles!]
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  AND: [RoleWhereInput!]
  OR: [RoleWhereInput!]
  NOT: [RoleWhereInput!]
}

input RoleWhereUniqueInput {
  id: ID
}

enum State {
  ACTIVE
  INACTIVE
  DISABLED
  FLAGGED
  BANNED
}

type Subscription {
  account(where: AccountSubscriptionWhereInput): AccountSubscriptionPayload
  authPayload(where: AuthPayloadSubscriptionWhereInput): AuthPayloadSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
}
`
      }
    