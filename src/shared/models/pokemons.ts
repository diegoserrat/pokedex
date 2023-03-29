import { IPokemonsArray } from './results-pokemon';

export interface IPokemons {
  count: number;
  next: string;
  previous: string | null,
  results: IPokemonsArray[]
}
