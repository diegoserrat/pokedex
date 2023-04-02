import { Component, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';

import { SharedModule } from '../../shared.module';
import { AppState } from 'src/core/store/app.state';
import { favoriteOrComment } from 'src/core/store/actions/app.actions';
import { PokemonsList } from 'src/shared/models/pokemons-list';

@Component({
  selector: 'pkm-remove-commentary',
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
        Deseja excluír o comentário {{pokemon.commentary}} do pokemon {{pokemon.name}} ?
      </div>
      <div class="modal-footer bg-light">
        <button type="button" class="btn btn-info" (click)="exclude()">Excluír</button>
        <button type="button" class="btn btn-info" (click)="activeModal.close()">Sair</button>
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

    console.log(this.pokemonsList);

    this.store.dispatch(favoriteOrComment.updateFavoriteorcomment({content: this.pokemonsList}));
    this.activeModal.close()
  }
}
