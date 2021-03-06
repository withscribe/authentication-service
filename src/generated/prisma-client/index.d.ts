// Code generated by Prisma (prisma@1.19.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  account: (where?: AccountWhereInput) => Promise<boolean>;
  authPayload: (where?: AuthPayloadWhereInput) => Promise<boolean>;
  role: (where?: RoleWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  account: (where: AccountWhereUniqueInput) => Account;
  accounts: (
    args?: {
      where?: AccountWhereInput;
      orderBy?: AccountOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<AccountNode>;
  accountsConnection: (
    args?: {
      where?: AccountWhereInput;
      orderBy?: AccountOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => AccountConnection;
  authPayloads: (
    args?: {
      where?: AuthPayloadWhereInput;
      orderBy?: AuthPayloadOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<AuthPayloadNode>;
  authPayloadsConnection: (
    args?: {
      where?: AuthPayloadWhereInput;
      orderBy?: AuthPayloadOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => AuthPayloadConnection;
  role: (where: RoleWhereUniqueInput) => Role;
  roles: (
    args?: {
      where?: RoleWhereInput;
      orderBy?: RoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<RoleNode>;
  rolesConnection: (
    args?: {
      where?: RoleWhereInput;
      orderBy?: RoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => RoleConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAccount: (data: AccountCreateInput) => Account;
  updateAccount: (
    args: { data: AccountUpdateInput; where: AccountWhereUniqueInput }
  ) => Account;
  updateManyAccounts: (
    args: { data: AccountUpdateInput; where?: AccountWhereInput }
  ) => BatchPayload;
  upsertAccount: (
    args: {
      where: AccountWhereUniqueInput;
      create: AccountCreateInput;
      update: AccountUpdateInput;
    }
  ) => Account;
  deleteAccount: (where: AccountWhereUniqueInput) => Account;
  deleteManyAccounts: (where?: AccountWhereInput) => BatchPayload;
  createAuthPayload: (data: AuthPayloadCreateInput) => AuthPayload;
  updateManyAuthPayloads: (
    args: { data: AuthPayloadUpdateInput; where?: AuthPayloadWhereInput }
  ) => BatchPayload;
  deleteManyAuthPayloads: (where?: AuthPayloadWhereInput) => BatchPayload;
  createRole: (data: RoleCreateInput) => Role;
  updateRole: (
    args: { data: RoleUpdateInput; where: RoleWhereUniqueInput }
  ) => Role;
  updateManyRoles: (
    args: { data: RoleUpdateInput; where?: RoleWhereInput }
  ) => BatchPayload;
  upsertRole: (
    args: {
      where: RoleWhereUniqueInput;
      create: RoleCreateInput;
      update: RoleUpdateInput;
    }
  ) => Role;
  deleteRole: (where: RoleWhereUniqueInput) => Role;
  deleteManyRoles: (where?: RoleWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  account: (
    where?: AccountSubscriptionWhereInput
  ) => AccountSubscriptionPayloadSubscription;
  authPayload: (
    where?: AuthPayloadSubscriptionWhereInput
  ) => AuthPayloadSubscriptionPayloadSubscription;
  role: (
    where?: RoleSubscriptionWhereInput
  ) => RoleSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type RoleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "role_ASC"
  | "role_DESC"
  | "desc_ASC"
  | "desc_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type Roles = "REGULAR" | "PREMIUM" | "ADMIN";

export type AccountOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "rememberMe_ASC"
  | "rememberMe_DESC"
  | "accountState_ASC"
  | "accountState_DESC"
  | "country_ASC"
  | "country_DESC"
  | "profileId_ASC"
  | "profileId_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type State = "ACTIVE" | "INACTIVE" | "DISABLED" | "FLAGGED" | "BANNED";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type AuthPayloadOrderByInput =
  | "token_ASC"
  | "token_DESC"
  | "refreshToken_ASC"
  | "refreshToken_DESC"
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface AccountUpdateOneInput {
  create?: AccountCreateInput;
  update?: AccountUpdateDataInput;
  upsert?: AccountUpsertNestedInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: AccountWhereUniqueInput;
}

export interface RoleCreateManyInput {
  create?: RoleCreateInput[] | RoleCreateInput;
  connect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput;
}

export interface AccountCreateOneInput {
  create?: AccountCreateInput;
  connect?: AccountWhereUniqueInput;
}

export type AccountWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
  profileId?: ID_Input;
}>;

export interface AuthPayloadCreateInput {
  token?: String;
  refreshToken?: String;
  account?: AccountCreateOneInput;
}

export interface AccountSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: AccountWhereInput;
  AND?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput;
  OR?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput;
  NOT?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput;
}

export interface RoleUpsertWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput;
  update: RoleUpdateDataInput;
  create: RoleCreateInput;
}

export interface AccountWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  rememberMe?: Boolean;
  rememberMe_not?: Boolean;
  accountState?: State;
  accountState_not?: State;
  accountState_in?: State[] | State;
  accountState_not_in?: State[] | State;
  country?: String;
  country_not?: String;
  country_in?: String[] | String;
  country_not_in?: String[] | String;
  country_lt?: String;
  country_lte?: String;
  country_gt?: String;
  country_gte?: String;
  country_contains?: String;
  country_not_contains?: String;
  country_starts_with?: String;
  country_not_starts_with?: String;
  country_ends_with?: String;
  country_not_ends_with?: String;
  roles_every?: RoleWhereInput;
  roles_some?: RoleWhereInput;
  roles_none?: RoleWhereInput;
  profileId?: ID_Input;
  profileId_not?: ID_Input;
  profileId_in?: ID_Input[] | ID_Input;
  profileId_not_in?: ID_Input[] | ID_Input;
  profileId_lt?: ID_Input;
  profileId_lte?: ID_Input;
  profileId_gt?: ID_Input;
  profileId_gte?: ID_Input;
  profileId_contains?: ID_Input;
  profileId_not_contains?: ID_Input;
  profileId_starts_with?: ID_Input;
  profileId_not_starts_with?: ID_Input;
  profileId_ends_with?: ID_Input;
  profileId_not_ends_with?: ID_Input;
  AND?: AccountWhereInput[] | AccountWhereInput;
  OR?: AccountWhereInput[] | AccountWhereInput;
  NOT?: AccountWhereInput[] | AccountWhereInput;
}

export interface RoleUpdateDataInput {
  role?: Roles;
  desc?: String;
}

export interface AccountUpsertNestedInput {
  update: AccountUpdateDataInput;
  create: AccountCreateInput;
}

export type RoleWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface RoleSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: RoleWhereInput;
  AND?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput;
  OR?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput;
  NOT?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput;
}

export interface RoleUpdateWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput;
  data: RoleUpdateDataInput;
}

export interface AuthPayloadWhereInput {
  token?: String;
  token_not?: String;
  token_in?: String[] | String;
  token_not_in?: String[] | String;
  token_lt?: String;
  token_lte?: String;
  token_gt?: String;
  token_gte?: String;
  token_contains?: String;
  token_not_contains?: String;
  token_starts_with?: String;
  token_not_starts_with?: String;
  token_ends_with?: String;
  token_not_ends_with?: String;
  refreshToken?: String;
  refreshToken_not?: String;
  refreshToken_in?: String[] | String;
  refreshToken_not_in?: String[] | String;
  refreshToken_lt?: String;
  refreshToken_lte?: String;
  refreshToken_gt?: String;
  refreshToken_gte?: String;
  refreshToken_contains?: String;
  refreshToken_not_contains?: String;
  refreshToken_starts_with?: String;
  refreshToken_not_starts_with?: String;
  refreshToken_ends_with?: String;
  refreshToken_not_ends_with?: String;
  account?: AccountWhereInput;
  AND?: AuthPayloadWhereInput[] | AuthPayloadWhereInput;
  OR?: AuthPayloadWhereInput[] | AuthPayloadWhereInput;
  NOT?: AuthPayloadWhereInput[] | AuthPayloadWhereInput;
}

export interface RoleUpdateInput {
  role?: Roles;
  desc?: String;
}

export interface AccountCreateInput {
  email: String;
  password: String;
  rememberMe?: Boolean;
  accountState?: State;
  country?: String;
  roles?: RoleCreateManyInput;
  profileId?: ID_Input;
}

export interface RoleCreateInput {
  role?: Roles;
  desc?: String;
}

export interface AccountUpdateInput {
  email?: String;
  password?: String;
  rememberMe?: Boolean;
  accountState?: State;
  country?: String;
  roles?: RoleUpdateManyInput;
  profileId?: ID_Input;
}

export interface RoleUpdateManyInput {
  create?: RoleCreateInput[] | RoleCreateInput;
  update?:
    | RoleUpdateWithWhereUniqueNestedInput[]
    | RoleUpdateWithWhereUniqueNestedInput;
  upsert?:
    | RoleUpsertWithWhereUniqueNestedInput[]
    | RoleUpsertWithWhereUniqueNestedInput;
  delete?: RoleWhereUniqueInput[] | RoleWhereUniqueInput;
  connect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput;
  disconnect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput;
}

export interface RoleWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  role?: Roles;
  role_not?: Roles;
  role_in?: Roles[] | Roles;
  role_not_in?: Roles[] | Roles;
  desc?: String;
  desc_not?: String;
  desc_in?: String[] | String;
  desc_not_in?: String[] | String;
  desc_lt?: String;
  desc_lte?: String;
  desc_gt?: String;
  desc_gte?: String;
  desc_contains?: String;
  desc_not_contains?: String;
  desc_starts_with?: String;
  desc_not_starts_with?: String;
  desc_ends_with?: String;
  desc_not_ends_with?: String;
  AND?: RoleWhereInput[] | RoleWhereInput;
  OR?: RoleWhereInput[] | RoleWhereInput;
  NOT?: RoleWhereInput[] | RoleWhereInput;
}

export interface AuthPayloadSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: AuthPayloadWhereInput;
  AND?: AuthPayloadSubscriptionWhereInput[] | AuthPayloadSubscriptionWhereInput;
  OR?: AuthPayloadSubscriptionWhereInput[] | AuthPayloadSubscriptionWhereInput;
  NOT?: AuthPayloadSubscriptionWhereInput[] | AuthPayloadSubscriptionWhereInput;
}

export interface AuthPayloadUpdateInput {
  token?: String;
  refreshToken?: String;
  account?: AccountUpdateOneInput;
}

export interface AccountUpdateDataInput {
  email?: String;
  password?: String;
  rememberMe?: Boolean;
  accountState?: State;
  country?: String;
  roles?: RoleUpdateManyInput;
  profileId?: ID_Input;
}

export interface NodeNode {
  id: ID_Output;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface RolePreviousValuesNode {
  id: ID_Output;
  role?: Roles;
  desc?: String;
}

export interface RolePreviousValues
  extends Promise<RolePreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  role: () => Promise<Roles>;
  desc: () => Promise<String>;
}

export interface RolePreviousValuesSubscription
  extends Promise<AsyncIterator<RolePreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  role: () => Promise<AsyncIterator<Roles>>;
  desc: () => Promise<AsyncIterator<String>>;
}

export interface AccountConnectionNode {}

export interface AccountConnection
  extends Promise<AccountConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<AccountEdgeNode>>() => T;
  aggregate: <T = AggregateAccount>() => T;
}

export interface AccountConnectionSubscription
  extends Promise<AsyncIterator<AccountConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AccountEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAccountSubscription>() => T;
}

export interface RoleEdgeNode {
  cursor: String;
}

export interface RoleEdge extends Promise<RoleEdgeNode>, Fragmentable {
  node: <T = Role>() => T;
  cursor: () => Promise<String>;
}

export interface RoleEdgeSubscription
  extends Promise<AsyncIterator<RoleEdgeNode>>,
    Fragmentable {
  node: <T = RoleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface RoleNode {
  id: ID_Output;
  role?: Roles;
  desc?: String;
}

export interface Role extends Promise<RoleNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  role: () => Promise<Roles>;
  desc: () => Promise<String>;
}

export interface RoleSubscription
  extends Promise<AsyncIterator<RoleNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  role: () => Promise<AsyncIterator<Roles>>;
  desc: () => Promise<AsyncIterator<String>>;
}

export interface AggregateAuthPayloadNode {
  count: Int;
}

export interface AggregateAuthPayload
  extends Promise<AggregateAuthPayloadNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAuthPayloadSubscription
  extends Promise<AsyncIterator<AggregateAuthPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AuthPayloadEdgeNode {
  cursor: String;
}

export interface AuthPayloadEdge
  extends Promise<AuthPayloadEdgeNode>,
    Fragmentable {
  node: <T = AuthPayload>() => T;
  cursor: () => Promise<String>;
}

export interface AuthPayloadEdgeSubscription
  extends Promise<AsyncIterator<AuthPayloadEdgeNode>>,
    Fragmentable {
  node: <T = AuthPayloadSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AuthPayloadSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface AuthPayloadSubscriptionPayload
  extends Promise<AuthPayloadSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AuthPayload>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AuthPayloadPreviousValues>() => T;
}

export interface AuthPayloadSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AuthPayloadSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AuthPayloadSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AuthPayloadPreviousValuesSubscription>() => T;
}

export interface RoleSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface RoleSubscriptionPayload
  extends Promise<RoleSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Role>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RolePreviousValues>() => T;
}

export interface RoleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RoleSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RoleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RolePreviousValuesSubscription>() => T;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AuthPayloadNode {
  token?: String;
  refreshToken?: String;
}

export interface AuthPayload extends Promise<AuthPayloadNode>, Fragmentable {
  token: () => Promise<String>;
  refreshToken: () => Promise<String>;
  account: <T = Account>() => T;
}

export interface AuthPayloadSubscription
  extends Promise<AsyncIterator<AuthPayloadNode>>,
    Fragmentable {
  token: () => Promise<AsyncIterator<String>>;
  refreshToken: () => Promise<AsyncIterator<String>>;
  account: <T = AccountSubscription>() => T;
}

export interface AccountNode {
  id: ID_Output;
  email: String;
  password: String;
  rememberMe: Boolean;
  accountState?: State;
  country?: String;
  profileId?: ID_Output;
}

export interface Account extends Promise<AccountNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  rememberMe: () => Promise<Boolean>;
  accountState: () => Promise<State>;
  country: () => Promise<String>;
  roles: <T = FragmentableArray<RoleNode>>(
    args?: {
      where?: RoleWhereInput;
      orderBy?: RoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  profileId: () => Promise<ID_Output>;
}

export interface AccountSubscription
  extends Promise<AsyncIterator<AccountNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  rememberMe: () => Promise<AsyncIterator<Boolean>>;
  accountState: () => Promise<AsyncIterator<State>>;
  country: () => Promise<AsyncIterator<String>>;
  roles: <T = Promise<AsyncIterator<RoleSubscription>>>(
    args?: {
      where?: RoleWhereInput;
      orderBy?: RoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  profileId: () => Promise<AsyncIterator<ID_Output>>;
}

export interface AccountPreviousValuesNode {
  id: ID_Output;
  email: String;
  password: String;
  rememberMe: Boolean;
  accountState?: State;
  country?: String;
  profileId?: ID_Output;
}

export interface AccountPreviousValues
  extends Promise<AccountPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  rememberMe: () => Promise<Boolean>;
  accountState: () => Promise<State>;
  country: () => Promise<String>;
  profileId: () => Promise<ID_Output>;
}

export interface AccountPreviousValuesSubscription
  extends Promise<AsyncIterator<AccountPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  rememberMe: () => Promise<AsyncIterator<Boolean>>;
  accountState: () => Promise<AsyncIterator<State>>;
  country: () => Promise<AsyncIterator<String>>;
  profileId: () => Promise<AsyncIterator<ID_Output>>;
}

export interface AccountSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface AccountSubscriptionPayload
  extends Promise<AccountSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Account>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AccountPreviousValues>() => T;
}

export interface AccountSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AccountSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AccountSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AccountPreviousValuesSubscription>() => T;
}

export interface AuthPayloadPreviousValuesNode {
  token?: String;
  refreshToken?: String;
}

export interface AuthPayloadPreviousValues
  extends Promise<AuthPayloadPreviousValuesNode>,
    Fragmentable {
  token: () => Promise<String>;
  refreshToken: () => Promise<String>;
}

export interface AuthPayloadPreviousValuesSubscription
  extends Promise<AsyncIterator<AuthPayloadPreviousValuesNode>>,
    Fragmentable {
  token: () => Promise<AsyncIterator<String>>;
  refreshToken: () => Promise<AsyncIterator<String>>;
}

export interface AggregateAccountNode {
  count: Int;
}

export interface AggregateAccount
  extends Promise<AggregateAccountNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAccountSubscription
  extends Promise<AsyncIterator<AggregateAccountNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AuthPayloadConnectionNode {}

export interface AuthPayloadConnection
  extends Promise<AuthPayloadConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<AuthPayloadEdgeNode>>() => T;
  aggregate: <T = AggregateAuthPayload>() => T;
}

export interface AuthPayloadConnectionSubscription
  extends Promise<AsyncIterator<AuthPayloadConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AuthPayloadEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAuthPayloadSubscription>() => T;
}

export interface RoleConnectionNode {}

export interface RoleConnection
  extends Promise<RoleConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<RoleEdgeNode>>() => T;
  aggregate: <T = AggregateRole>() => T;
}

export interface RoleConnectionSubscription
  extends Promise<AsyncIterator<RoleConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RoleEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRoleSubscription>() => T;
}

export interface AggregateRoleNode {
  count: Int;
}

export interface AggregateRole
  extends Promise<AggregateRoleNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRoleSubscription
  extends Promise<AsyncIterator<AggregateRoleNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AccountEdgeNode {
  cursor: String;
}

export interface AccountEdge extends Promise<AccountEdgeNode>, Fragmentable {
  node: <T = Account>() => T;
  cursor: () => Promise<String>;
}

export interface AccountEdgeSubscription
  extends Promise<AsyncIterator<AccountEdgeNode>>,
    Fragmentable {
  node: <T = AccountSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Type Defs
 */

export const prisma: Prisma;
