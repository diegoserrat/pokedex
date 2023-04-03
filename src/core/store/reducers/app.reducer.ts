import { createReducer, on } from "@ngrx/store";

import { setPagesSearched } from '../actions/app.actions';
import { favoriteOrComment } from '../actions/app.actions';
import { appInitialState } from '../app.state';

export const appReducer = createReducer(
  appInitialState,
  on(setPagesSearched, (state, action) => {
    return state = {
      ...state,
      pagesSearched: action.page
    }
  }),
  on(favoriteOrComment.addFavoriteorcomment, ( state, action ) => {
    return state = {
      ...state,
      pokemonsList: action.content,
    }
  }),
  on(favoriteOrComment.updateFavoriteorcomment, ( state, action ) => {
    return state = {
      ...state,
      pokemonsList: action.content,
    }
  }),
)
