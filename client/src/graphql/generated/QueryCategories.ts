/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryCategories
// ====================================================

export interface QueryCategories_categories {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface QueryCategories {
  categories: QueryCategories_categories[];
}
