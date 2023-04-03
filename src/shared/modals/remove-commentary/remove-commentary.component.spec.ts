import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './../../shared.module';
import { RemoveCommentaryComponent } from './remove-commentary.component';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

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
