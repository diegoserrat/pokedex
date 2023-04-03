import { createAction, createActionGroup, props } from "@ngrx/store";

export const favoriteOrComment = createActionGroup({
  source: 'Favorite',
  events: {
    'Add favoriteOrComment': props<{content: any[]}>(),
    'Update favoriteOrComment': props<{content: any[]}>(),
  }
})

export const setPagesSearched = createAction(
  '[App] change favorite value',
  props<{page: number[]}>()
);




