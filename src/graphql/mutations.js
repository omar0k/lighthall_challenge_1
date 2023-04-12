/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGeoCount = /* GraphQL */ `
  mutation CreateGeoCount(
    $input: CreateGeoCountInput!
    $condition: ModelGeoCountConditionInput
  ) {
    createGeoCount(input: $input, condition: $condition) {
      id
      timezone
      count
      createdAt
      updatedAt
    }
  }
`;
export const updateGeoCount = /* GraphQL */ `
  mutation UpdateGeoCount(
    $input: UpdateGeoCountInput!
    $condition: ModelGeoCountConditionInput
  ) {
    updateGeoCount(input: $input, condition: $condition) {
      id
      timezone
      count
      createdAt
      updatedAt
    }
  }
`;
export const deleteGeoCount = /* GraphQL */ `
  mutation DeleteGeoCount(
    $input: DeleteGeoCountInput!
    $condition: ModelGeoCountConditionInput
  ) {
    deleteGeoCount(input: $input, condition: $condition) {
      id
      timezone
      count
      createdAt
      updatedAt
    }
  }
`;
