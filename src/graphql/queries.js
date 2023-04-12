/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGeoCount = /* GraphQL */ `
  query GetGeoCount($id: ID!) {
    getGeoCount(id: $id) {
      id
      timezone
      count
      createdAt
      updatedAt
    }
  }
`;
export const listGeoCounts = /* GraphQL */ `
  query ListGeoCounts(
    $filter: ModelGeoCountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeoCounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timezone
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
