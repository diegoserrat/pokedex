import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { PokemonsList } from '../../shared/models/pokemons-list';

export interface AppState {
  viewList: PokemonsList[],
  pokemonsList: any,
  commentValue: Comment[],
  pagesSearched: any
}

export interface Favorite {
  id: number,
  favorite: boolean,
}

export interface Comment {
  id: number,
  favorite: boolean,
  comment: string
}

export const appInitialState: any = {
  pokemonsList: [],
  commentValue: [],
  viewList: [],
  pagesSearched: [1]
}
