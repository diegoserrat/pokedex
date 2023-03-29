import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/core/services/pokemon.service';
import { ListComponent } from 'src/shared/components/list/list.component';

import { SharedModule } from 'src/shared/shared.module';

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
      <pkm-list></pkm-list>
    `
  })

export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService
        .getPokemon()
        .subscribe({
          next: pokemons => {
            console.log(pokemons.results);
          }
        })

  }

}
