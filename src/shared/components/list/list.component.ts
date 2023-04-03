import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { select, Store } from '@ngrx/store';

import { BtnAddComponent } from '../btn-add/btn-add.component';
import { BtnRemoveComponent } from '../btn-remove/btn-remove.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { AppState} from '../../../core/store/app.state';
import { favoriteOrComment } from './../../../core/store/actions/app.actions';
import { PokemonsList } from '../../../shared/models/pokemons-list';

@Component({
  selector: 'pkm-list',
  standalone: true,
  imports: [
    CommonModule,
    ListComponent,
    BtnAddComponent,
    BtnRemoveComponent,
    FavoriteComponent
  ],
  styleUrls: ['./list.component.scss'],
  template: `
    <div class="container" class="d-flex flex-column">
      <ul class="container">
        <li class="d-flex align-items-center bg-primary mb-3 rounded-pill p-2" id="list" *ngFor="let pokemon of listItem">
          <div>
            <img id="list-img" src={{pokemon.photoUrl}}/>
          </div>
          <div class="d-flex flex-column justify-content-around w-75" id="content-data">
            <div class="bg-warning rounded-pill p-1 pl-4" id="pkm-text-name">
              {{pokemon.name}}
            </div>
            <div class="d-flex align-items-end">
              <div class="bg-warning rounded-pill p-3 pl-4 w-50"> {{pokemon.commentary}} </div>
              <pkm-btn-add
                [text]="'Adicionar comentário'"
                [pokemon]="pokemon"/>
              <pkm-btn-remove
                [text]="'Excluír comentário'"
                [pokemon]="pokemon"/>
            </div>
          </div>
          <div id="favorite">
            <pkm-favorite (click)="clickedFavorite(pokemon.id)" [favorite]="pokemon.favorite" />
          </div>
        </li>
      </ul>
    </div>
  `
})
export class ListComponent implements OnChanges {

  @Input() listItem: PokemonsList[] = [];
  @Input() page = 0;
  pokemonsListFavorite: PokemonsList[] = [];

  constructor( private store: Store<{app: AppState}> ){
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.store.pipe(select('app')).subscribe( s => this.pokemonsListFavorite = s.pokemonsList);
  }

  clickedFavorite(id: number) {
    this.pokemonsListFavorite.forEach((pokemon: PokemonsList) => {
      if(pokemon.id === id) {

        pokemon.favorite = !pokemon.favorite

        const index = this.listItem.findIndex((poke) => poke.id === id);
        this.listItem[index].favorite = pokemon.favorite;
      }
    });

    this.store.dispatch(favoriteOrComment.updateFavoriteorcomment({content: this.pokemonsListFavorite}));
  }
}
