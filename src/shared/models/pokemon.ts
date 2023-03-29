import { IPokemonArray } from './results-pokemon';

export interface IPokemon {
  count: number;
  next: string;
  previous: string | null,
  results: IPokemonArray[]
}
