import { HomeComponent } from './home.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { PokemonService } from '../../core/services/pokemon.service';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from '../../shared/components/list/list.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { Pokemons } from '../../shared/models/pokemons';
import { Pokemon } from '../../shared/models/pokemon';

const mockPokemonsArray = [
  { id: 1, name: 'test', url: ''}
]

const mockPokemons  = {
  count: 123,
  next: '1',
  previous: '12',
  results: mockPokemonsArray
}

class MockPokemonService {
  getPokemons(offset: number, limit: number ): Observable<Pokemons> {
    return of(mockPokemons)
  }

  getPokemon(id: number): Observable<any> {
    return of(mockPokemons)
  }
}

describe('HomeComponent', () => {
  let injector: TestBed;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let pokemonService: PokemonService;
  let store: MockStore;
  const initialState = {
    pokemonsList: [],
    pagesSearched: [1]
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        ListComponent,
        PaginationComponent
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: PokemonService, useClass: MockPokemonService}
      ]
    })
  });

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    pokemonService = injector.get(PokemonService);
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

