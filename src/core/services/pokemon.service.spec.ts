import { of } from 'rxjs';

import { PokemonService } from './pokemon.service';
import { Pokemon, Stats, Movies, Abilities, Types, Version } from '../../shared/interfaces/pokemon';

const mockPokemonsArray = [{ id: 1, name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/1/'}]

const mockPokemons  = {
  count: 1281,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
  previous: 'null',
  results: mockPokemonsArray
}

const version: Version[] = [{ name: 'name', url: ''}];
const types: Types[] = [{ slot: 123 , type: version}]
const abilities: Abilities[] = [{ abilitie: version, is_hidden: false, slot: 12 }];
const movies: Movies[] = [{ movie: version, version_group_details: [] }];
const stats: Stats[]= [{ base_stat: 123, effort: 1, stat: version }];

const mockPokemon: Pokemon = {
  abilities: abilities,
  base_experience:34,
  height: 12,
  held_items: [],
  is_default: true,
  location_area_encounters: 'area',
  moves: movies,
  name: 'charizard',
  order: 12,
  past_types: [],
  species: version,
  sprites: [{other : { home: { front_default: ''} } }],
  stats: stats,
  types: types,
  weight: 123
}

describe('PokemonService', () => {
  let service: PokemonService;
  let mockPokemonService: any;
  let httpSpy: any;

  beforeEach((() => {
    mockPokemonService = {
      getPokemons: jest.fn(),
      getPokemon: jest.fn()
    }

    httpSpy = {
      get: jest.fn(),
    }

    service = new PokemonService(httpSpy)

    jest.spyOn(mockPokemonService, 'getPokemons').mockReturnValue((of(mockPokemons)));
    jest.spyOn(mockPokemonService, 'getPokemon').mockReturnValue((of(mockPokemon)));
  }));

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should call getPokemons once', () => {
    const getPokemons =  jest.spyOn(httpSpy, 'get').mockReturnValue((of(mockPokemons)));
    service.getPokemons(0, 10);

    expect(getPokemons).toBeCalledTimes(1);
  })


  test('should call getPokemon once', () => {
    const getPokemon =  jest.spyOn(httpSpy, 'get').mockReturnValue((of(mockPokemons)));
    service.getPokemon(1);

    expect(getPokemon).toBeCalledTimes(1);
  })

});
