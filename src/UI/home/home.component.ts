import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { PokemonService } from 'src/core/services/pokemon.service';
import { ListComponent } from 'src/shared/components/list/list.component';

import { SharedModule } from 'src/shared/shared.module';
import { IPokemonsArray } from '../../shared/models/results-pokemon';
import { IPokemonsList } from './models/pokemons-list';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
      SharedModule,
      ListComponent
    ],
    providers: [
      PokemonService
    ],
    template: `
      <pkm-list [list]="list"></pkm-list>
    `
  })

export class HomeComponent implements OnInit {

  pokemonsList: IPokemonsArray[] = [];
  list: IPokemonsList[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getPokemons()
        .pipe(finalize(() => this.getPokemon() ))
        .subscribe({
          next: pokemons => {
            this.pokemonsList = pokemons.results;
          }
        })
  }

  getPokemon() {
    this.pokemonsList.forEach( pokemon => {
      this.pokemonService.getPokemon(this.idPokemon(pokemon.url))
        .subscribe({
          next: pkm => {
            this.list.push({
              id: this.idPokemon(pokemon.url),
              name: pokemon.name,
              photoUrl: pkm.sprites.other.home.front_default
            });
          }
        })
    })
  }

  idPokemon(url: string): string {
    const id = new URL(url);
    return id.pathname.split('/')[4];
  }

}
