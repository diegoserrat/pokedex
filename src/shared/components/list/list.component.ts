import { Component, Input, OnChanges,  SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnAddComponent } from '../btn-add/btn-add.component';
import { BtnRemoveComponent } from '../btn-remove/btn-remove.component';
import { FavoriteComponent } from '../favorite/favorite.component';

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
        <li class="d-flex align-items-center bg-primary mb-3 rounded-pill p-2"
            id="list"
            *ngFor="let pokemon of list">
          <div>
            <img id="list-img" src={{pokemon.photoUrl}}/>
          </div>
          <div
              class="d-flex flex-column justify-content-around w-75"
              id="content-data">
            <div
                class="bg-warning rounded-pill p-1 pl-4"
                id="pkm-text-name">
              {{pokemon.name}}
            </div>
            <div class="d-flex align-items-end">
              <div class="bg-warning rounded-pill p-3 pl-4 w-50"> comentário </div>
              <pkm-btn-add [text]="'Adicionar comentário'"></pkm-btn-add>
              <pkm-btn-remove [text]="'Excluír comentário'"></pkm-btn-remove>
            </div>
          </div>
          <div id="favorite">
            <pkm-favorite (click)="isFavorite = !isFavorite" [favorite]="isFavorite"></pkm-favorite>
          </div>
        </li>
      </ul>
    </div>
  `
})
export class ListComponent implements OnChanges {

  @Input() list: any = [];
  isFavorite = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.list = changes['list'].currentValue
  }
}
