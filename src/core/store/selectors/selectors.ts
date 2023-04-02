import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectFavorites = createFeatureSelector<ReadonlyArray<any>>('pokemonsList');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<any>>('collection');

export const selectFavoritesCollection = createSelector(
  selectFavorites,
  selectCollectionState,
  (pokemonsList, collection) => {
    return collection.map(() => {
        console.log(pokemonsList);
       return pokemonsList;
    });
  }
);
