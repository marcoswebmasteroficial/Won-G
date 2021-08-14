/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QuerySearch
// ====================================================

export interface QuerySearch_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QuerySearch_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QuerySearch_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  price: number;
  cover: QuerySearch_games_cover | null;
  developers: QuerySearch_games_developers[];
}

export interface QuerySearch {
  games: QuerySearch_games[];
}

export interface QuerySearchVariables {
  limit?: number | null;
  start?: number | null;
  keywords: string;
  price?: number | null;
  sort?: string | null;
}
