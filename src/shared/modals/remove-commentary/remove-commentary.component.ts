import { Component, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';

import { SharedModule } from '../../shared.module';
import { AppState } from '../../../core/store/app.state';
import { favoriteOrComment } from '../../../core/store/actions/app.actions';
import { PokemonsList } from '../../interfaces/pokemons-list';

@Component({
  selector: 'pkm-remove-commentary',
  standalone: true,
  imports: [
    SharedModule
  ],
  template: `
      <div class="d-flex flex-column modal-body bg-light">
        <div class="d-flex justify-content-between">
            <h4 class="modal-title" id="modal-basic-title">Remover comentário</h4>
            <button type="button" class="btn btn-light bg-white border-0" aria-label="Close" (click)="activeModal.dismiss()">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="mt-5">
          Deseja excluír o comentário {{pokemon.commentary}} do pokemon {{pokemon.name}} ?
        </div>
        <div class="d-flex justify-content-end mt-5">
          <button type="button" class="btn btn-danger mr-3" (click)="exclude()">Excluír</button>
          <button type="button" class="btn btn-info" (click)="activeModal.close()">Sair</button>
        </div>
      </div>
  `,
  styleUrls: ['./remove-commentary.component.scss']
})

export class RemoveCommentaryComponent {

  @Input() pokemon: PokemonsList = { id: 0, commentary: '', favorite: false, name: '', photoUrl: '' };
  pokemonsList: PokemonsList[] = [];
  id = 0;

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store<{app: AppState}> ){}

  ngOnInit() {
    const { name, commentary, id} = this.pokemon;
    console.log(this.pokemon);
    this.id = id;
    this.store.pipe(select('app')).subscribe( s => this.pokemonsList = s.pokemonsList);
  }

  exclude() {
    this.pokemonsList.forEach((pokemon: PokemonsList) => {
      if(pokemon.id === this.id) {
        pokemon.commentary = '';
      }
    });

    this.store.dispatch(favoriteOrComment.updateFavoriteorcomment({content: this.pokemonsList}));
    this.activeModal.close()
  }
}
