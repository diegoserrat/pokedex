import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../../shared.module';
import { PokemonsList } from '../../interfaces/pokemons-list';
import { RemoveCommentaryComponent } from '../../modals/remove-commentary/remove-commentary.component';

@Component({
  selector: 'pkm-btn-remove',
  standalone: true,
  imports: [
    SharedModule
  ],
  template: `
    <button
      type="button"
      class="btn btn-danger rounded-pill ml-2 mr-2 text-dark"
      (click)="openModalRemoveComentary()">
      <small> {{text}} </small>
    </button>
  `,
  styleUrls: ['./btn-remove.component.scss']
})
export class BtnRemoveComponent {

  @Input() text = 'default';
  @Input() pokemon: PokemonsList = { id: 0, commentary: '', favorite: false, name: '', photoUrl: ''};

  constructor(private modalService: NgbModal) {}

  openModalRemoveComentary() {
    const modalRef = this.modalService.open(RemoveCommentaryComponent, {
      backdrop: false,
      centered: true,
      size: 'md',
      modalDialogClass: 'rounded dialog-class',
    });
    modalRef.componentInstance.pokemon = this.pokemon;
  }


}
