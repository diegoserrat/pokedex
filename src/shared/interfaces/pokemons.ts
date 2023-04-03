import { PokemonsArray } from './results-pokemon';

export interface Pokemons {
  count: number;
  next: string;
  previous: string | null,
  results: PokemonsArray[]
}
