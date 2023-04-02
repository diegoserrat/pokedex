import { setPagesSearched } from './../actions/app.actions';
import { createReducer, on } from "@ngrx/store";

import { setVieweValue, favorite } from '../actions/app.actions';
import { appInitialState } from '../app.state';

export const appReducer = createReducer(
  appInitialState,
  on(setVieweValue, (state, action) => {
    return state = {
      ...state,
      viewList: action.list,
    }
  }),
  on(setPagesSearched, (state, action) => {
    return state = {
      ...state,
      pagesSearched: action.page
    }
  }),
  on(favorite.addFavorite, ( state, action ) => {
    return state = {
      ...state,
      pokemonsList: action.content,
    }
  }),
  on(favorite.updateFavorite, ( state, action ) => {
    return state = {
      ...state,
      pokemonsList: action.content,
    }
  }),
)
