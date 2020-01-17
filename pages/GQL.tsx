import gql from "graphql-tag";

export const GET_NAME = gql`
    query {
      buildings {
        name
      }
    }
  `