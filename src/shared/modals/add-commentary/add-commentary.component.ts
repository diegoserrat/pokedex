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
      <div class="d-flex flex-column modal-body bg-light">
        <div class="d-flex justify-content-between">
          <h4 class="modal-title" id="modal-basic-title">Adicionar comentário</h4>
          <button type="button" class="btn btn-light bg-white border-0" aria-label="Close" (click)="activeModal.dismiss()">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <form [formGroup]="form" class="mt-3">
          <div class="mb-3">
            <div class="input-group mb-3">
              <input placeholder="Nome" formControlName="name" class="form-control bg-white">
            </div>
          </div>
          <div class="input-group mb-3">
            <textarea placeholder="Comentário" formControlName="commentary" class="form-control resizeble"></textarea>
          </div>
        </form>
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-info" (click)="save()">Salvar</button>
        </div>
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
    this.form.controls.name.disable();
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
