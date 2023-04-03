import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { RemoveCommentaryComponent } from './remove-commentary.component';

describe('RemoveCommentaryComponent', () => {
  let fixture: RemoveCommentaryComponent
  let activeModal: NgbActiveModal;
  let store: Store<{app: {
    pokemonsList: [],
    pagesSearched: [1]
  }}>;

  beforeEach(() => {
    fixture = new RemoveCommentaryComponent(activeModal, store)
  });

  test('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
