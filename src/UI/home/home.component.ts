import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize } from 'rxjs';
import { PokemonService } from '../../core/services/pokemon.service';
import { AppState } from '../../core/store/app.state';
import { ListComponent } from '../../shared/components/list/list.component';

import { SharedModule } from '../../shared/shared.module';
import { PokemonsArray } from '../../shared/interfaces/results-pokemon';
import { PokemonsList } from '../../shared/interfaces/pokemons-list';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { favoriteOrComment } from '../../core/store/actions/app.actions';
import { FilterComponent } from './../../shared/components/filter/filter.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
      SharedModule,
      ListComponent,
      PaginationComponent,
      FilterComponent,
    ],
    providers: [
      PokemonService
    ],
    template: `
      <div class="container d-flex flex-column align-items-center">
        <img src="../../assets/images/pokemon.svg" class="img-fluid w-25 pt-2" alt="Pokémon logo"/>
        <pkm-filter
          class="w-100"
         (searched)="searched($event)"/>
        <pkm-list
          class="w-100"
          [listItem]="list"
          [page]="page"
          [pokemonsListFavorite]="oldList"
          />
        <pkm-pagination
          [collectionSize]="collectionSize"
          (page)="pagination($event)"
          [pageList]="pageList"/>
      </div>
    `
  })

export class HomeComponent implements OnInit {

  pokemonsList: PokemonsArray[] = [];
  list: PokemonsList[] = [];
  oldList: PokemonsList[] = [];

  collectionSize = 0;
  pageList = [1];
  page = 1;

  constructor(
    private pokemonService: PokemonService,
    private store: Store<{app: AppState}>) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  searched(search: string) {
    if (search.length) {
      this.list = this.oldList.filter( pokemon => pokemon.name.includes(search))
      this.collectionSize = this.list.length;
    } else {
      this.list = [];
      this.getPokemonList();
    }
  }

  getPokemonList(offset = 0, limit = 10) {
    this.pokemonService.getPokemons(offset, limit)
        .pipe(finalize(() => this.getPokemon() ))
        .subscribe({
          next: pokemons => {
            this.collectionSize = pokemons.count;

            pokemons.results.forEach( pokemon => {
              pokemon.id = this.idPokemon(pokemon.url)
            })
            this.pokemonsList = pokemons.results;
          }
        })
  }

   getPokemon() {
    this.pokemonsList.forEach( (pokemon, index, array ) => {
      this.pokemonService.getPokemon(pokemon.id)
        .subscribe({
          next: pkm => {
            this.list.push({
              id: pokemon.id,
              name: pokemon.name,
              photoUrl: pkm.sprites.other.home.front_default,
              favorite: false,
              commentary: ''
            });

            if (index === array.length -1 ){
              this.oldList.forEach((pokemon: any) =>{
                this.list.forEach( pkm => {
                  if (pokemon.id === pkm.id) {
                    pkm.favorite = pokemon.favorite;
                    pkm.commentary = pokemon.commentary
                  }
                })
              })

              this.oldList = [ ...this.oldList, ...this.list ];
              const withoutDuplicates = this.oldList.filter((value, index, self) => index === self.findIndex((t) => ( t.id === value.id )));

              this.store.dispatch(favoriteOrComment.addFavoriteorcomment({content: withoutDuplicates}));
            }
          }
        })
    })
  }

  idPokemon(url: string): number {
    const id = new URL(url);
    return Number(id.pathname.split('/')[4]);
  }

  pagination(page: number) {
    this.page = page;
    this.list = [];
    let offset = 0;

    if ( page === 1 ) offset =  0
    if ( page === 2 ) offset = 10
    if ( page >= 3 ) offset = page * 10 - 10

    this.getPokemonList(offset, 10);
  }
}
