import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { PokemonService } from 'src/core/services/pokemon.service';
import { ListComponent } from 'src/shared/components/list/list.component';

import { SharedModule } from 'src/shared/shared.module';
import { IPokemon } from '../../shared/models/pokemon';
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
      <p class="">home works!2</p>
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
    this.pokemonService
        .getPokemons()
        .pipe(finalize(() => this.getPokemon() ))
        .subscribe({
          next: pokemons => {
            this.pokemonsList = pokemons.results;
          }
        })
  }

  getPokemon() {
    this.pokemonsList.forEach( pokemon => {
      this.pokemonService
        .getPokemon(this.idPokemon(pokemon.url))
        .subscribe({
          next: pokemon => {
            this.list.push({ name: pokemon.name, photoUrl: pokemon.sprites.other.home.front_default })
          }
        })
    })
  }

  idPokemon(url: string): string {
    const id = new URL(url);
    return id.pathname.split('/')[4];
  }

}
