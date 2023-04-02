import { AddCommentaryComponent } from './../../modals/add-commentary/add-commentary.component';
import { Component, Input} from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/shared/shared.module';
import { PokemonsList } from '../../models/pokemons-list';

@Component({
  selector: 'pkm-btn-add',
  standalone: true,
  imports: [
    SharedModule,
  ],
  template: `
    <button
      type="button"
      class="btn btn-warning rounded-pill ml-2 mr-2"
      (click)="openModalComentary()">
      <small>{{text}}</small>
    </button>
  `,
  styleUrls: ['./btn-add.component.scss']
})
export class BtnAddComponent {

  @Input() text = 'default';
  @Input() pokemon: PokemonsList = { id: 0, commentary: '', favorite: false, name: '', photoUrl: ''};

  constructor(private modalService: NgbModal) {}

  openModalComentary() {
    const modalRef = this.modalService.open(AddCommentaryComponent, {
      backdrop: false,
      centered: true,
      modalDialogClass: 'bg-light rounded',
      size: 'lg'
    });
    modalRef.componentInstance.pokemon = this.pokemon;
  }

}
