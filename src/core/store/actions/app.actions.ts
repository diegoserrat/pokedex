import { createAction, createActionGroup, props } from "@ngrx/store";
import { PokemonsList } from '../../../shared/models/pokemons-list';

export const favorite = createActionGroup({
  source: 'Favorite',
  events: {
    'Add Favorite': props<{content: any[]}>(),
    'Update Favorite': props<{content: any[]}>(),
  }
})

export const commentary = createActionGroup({
  source: 'Commentary',
  events: {
    'Add Commentary' : props<{commentary: any[]}>,
    'Update Commentary' : props<{commentary: any[]}>,
  }
})

export const setVieweValue = createAction(
  '[App] change favorite value',
  props<{list: PokemonsList[]}>()
);

export const setPagesSearched = createAction(
  '[App] change favorite value',
  props<{page: number[]}>()
);




