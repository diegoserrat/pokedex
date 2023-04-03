import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';

import { SharedModule } from '../../shared.module';
import { PokemonsList } from '../../interfaces/pokemons-list';
import { AppState } from '../../../core/store/app.state';
import { favoriteOrComment } from '../../../core/store/actions/app.actions';

@Component({
  selector: 'pkm-add-commentary',
  standalone: true,
  imports: [
    SharedModule
  ],
  template: `
      <div class="modal-header bg-light">
        <h4 class="modal-title" id="modal-basic-title">Adicionar comentário</h4>
        <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss()"></button>
      </div>
      <div class="modal-body bg-light">
        <form [formGroup]="form">
          <div class="mb-3">
            <input placeholder="Nome" formControlName="name">
          </div>
          <div class="mb-3">
            <textarea placeholder="Comentário" formControlName="commentary" ></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer bg-light">
        <button type="button" class="btn btn-info" (click)="save()">Salvar</button>
      </div>
  `,
  styleUrls: ['./add-commentary.component.scss']
})
export class AddCommentaryComponent implements OnInit {

  @Input() pokemon: PokemonsList = { id: 0, commentary: '', favorite: false, name: '', photoUrl: '' };

  form = new FormGroup({
    name: new FormControl(''),
    commentary: new FormControl(''),
  });
  id = 0;
  pokemonsList: PokemonsList[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store<{app: AppState}> ){}

  ngOnInit() {
    const { name, commentary, id} = this.pokemon;
    this.id = id;
    this.form.patchValue({name, commentary });
    this.store.pipe(select('app')).subscribe( s => this.pokemonsList = s.pokemonsList);
  }
  save() {
    const { commentary } = this.form.value;

    this.pokemonsList.forEach((pokemon: PokemonsList) => {
      if(pokemon.id === this.id) {

        pokemon.commentary = commentary || '';
      }
    });

    this.store.dispatch(favoriteOrComment.updateFavoriteorcomment({content: this.pokemonsList}));
    this.activeModal.close()
  }
}
