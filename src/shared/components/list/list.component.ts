import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { select, Store } from '@ngrx/store';

import { BtnAddComponent } from '../btn-add/btn-add.component';
import { BtnRemoveComponent } from '../btn-remove/btn-remove.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { AppState} from '../../../core/store/app.state';
import { favoriteOrComment } from './../../../core/store/actions/app.actions';
import { PokemonsList } from '../../interfaces/pokemons-list';

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
    <div class="container d-flex flex-column" id="content-list">
      <ul class="container" *ngIf="listItem?.length; else no_items">
        <li class="d-flex align-items-center bg-primary mb-3 rounded-pill p-2" id="list" *ngFor="let pokemon of listItem">
          <div>
            <img id="list-img" src={{pokemon.photoUrl}}/>
          </div>
          <div class="d-flex flex-column justify-content-around w-75" id="content-data">
            <div class="bg-warning rounded-pill p-1 pl-4" id="pkm-text-name">
              {{pokemon.name}}
            </div>
            <div class="d-flex align-items-end">
              <div class="bg-warning rounded-pill p-3 pl-4 w-50 h-100"> {{pokemon.commentary}} </div>
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
      <ng-template #no_items>
        <p class="font-weight-normal">
          Sem itens filtrados.
        </p>
      </ng-template>
    </div>
  `
})
export class ListComponent {

  @Input() listItem: PokemonsList[] = [];
  @Input() page = 0;
  @Input() pokemonsListFavorite: PokemonsList[] = [];

  constructor( private store: Store){
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
