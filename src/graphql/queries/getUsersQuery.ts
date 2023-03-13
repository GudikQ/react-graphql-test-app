import { graphql } from '../../__generated__'

export const GET_USERS = graphql(/* GraphQL */ `
  query getUsers($limit: Int!, $order: Order!, $sortBy: String!) {
    users(args: { limit: $limit, order: $order, sortBy: $sortBy }) {
      id
      name
      state {
        id
        gamesPlayed
        score
      }
    }
  }
`)
