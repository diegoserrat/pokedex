import { Store, on } from '@ngrx/store';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { AppState } from './../../core/store/app.state';
import { Pokemon, Types, Version, Abilities, Movies, Stats } from '../../shared/interfaces/pokemon';

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

describe('HomeComponent', () => {
  let fixture: HomeComponent;
  let mockPokemonService: any;
  let storeSpy: any;

  beforeEach(() => {
    mockPokemonService = {
      getPokemons: jest.fn(),
      getPokemon: jest.fn()
    }
    storeSpy = {
      dispatch: jest.fn()
    }

    fixture = new HomeComponent( mockPokemonService, storeSpy );

    fixture.oldList = [{
      id: 1,
      name: 'charizard',
      photoUrl: 'https://pokeapi.co/api/v2/pokemon/1/',
      favorite: true,
      commentary: ''}]

    jest.spyOn(mockPokemonService, 'getPokemons').mockReturnValue((of(mockPokemons)));
    jest.spyOn(mockPokemonService, 'getPokemon').mockReturnValue((of(mockPokemon)));

    fixture.ngOnInit();
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });


  it('should test when searched is trigger with value', () => {
    fixture.searched('cha');

    expect(fixture.collectionSize).toBeGreaterThan(0);
  });

  it('should test when searched is trigger without value', () => {
    fixture.searched('');

    expect(fixture.collectionSize).toBe(1281);
  });

  it('should test when pagination is 1', () => {
    const getPokemonList = jest.spyOn(fixture, 'getPokemonList')
    fixture.pagination(1);

    expect(getPokemonList).toHaveBeenCalled();
  });

  it('should test when pagination is 2', () => {
    const getPokemonList = jest.spyOn(fixture, 'getPokemonList')
    fixture.pagination(2);

    expect(getPokemonList).toHaveBeenCalled();
  });

  it('should test when pagination is equals of bigger than 3', () => {
    const getPokemonList = jest.spyOn(fixture, 'getPokemonList')
    fixture.pagination(3);

    expect(getPokemonList).toHaveBeenCalled();
  });
});

