/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGameState: State;
  createUser: User;
  updateFriends?: Maybe<Array<Maybe<User>>>;
};


export type MutationCreateGameStateArgs = {
  input: NewState;
};


export type MutationCreateUserArgs = {
  name: Scalars['String'];
};


export type MutationUpdateFriendsArgs = {
  input: NewFriends;
};

export type NewFriends = {
  friends?: InputMaybe<Array<Scalars['ID']>>;
  userID: Scalars['String'];
};

export type NewState = {
  gamesPlayed: Scalars['Int'];
  score: Scalars['Int'];
  userID: Scalars['String'];
};

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Query = {
  __typename?: 'Query';
  user: User;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  args?: InputMaybe<Args>;
};

export type State = {
  __typename?: 'State';
  gamesPlayed: Scalars['Int'];
  id: Scalars['ID'];
  score: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  friends?: Maybe<Array<Maybe<User>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  state: State;
};

export type Args = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Order>;
  sortBy?: InputMaybe<Scalars['String']>;
};

export type GetUsersQueryVariables = Exact<{
  limit: Scalars['Int'];
  order: Order;
  sortBy: Scalars['String'];
}>;


export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, name: string, state: { __typename?: 'State', id: string, gamesPlayed: number, score: number } } | null> | null };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"state"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gamesPlayed"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;