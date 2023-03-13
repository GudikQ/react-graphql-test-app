import { GET_USERS } from '../graphql/queries/getUsersQuery'
import { GraphQLError } from 'graphql/error'

export const mockedUsers = {
    users: [
      {
        id: '3ed5dd73-8068-46d6-bd8a-89d9a8df7631',
        name: 'Nando',
        __typename: 'User',
        state: {
          gamesPlayed: 0,
          id: '3',
          score: 40,
        },
      },
      {
        id: '3ed5dd73-8068-46d6-bd8a-89d9a8df71221',
        name: 'Alex',
        __typename: 'User',
        state: {
          gamesPlayed: 0,
          id: '5',
          score: 10,
        },
      },
    ],
}

export const mockedGetUsersSuccess = [
  {
    request: { query: GET_USERS },
    result: {
      data: mockedUsers
    },
  },
]

export const mockedGetUsersFailed = [
  {
    request: { query: GET_USERS },
    result: {
      errors: [new GraphQLError("Error while getting data")]
    },
  },
]
