import { AppState } from './../../../core/store/app.state';
import { SharedModule } from './../../shared.module';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AddCommentaryComponent } from './add-commentary.component';

describe('AddCommentaryComponent', () => {
  let fixture: AddCommentaryComponent
  let modalService: NgbActiveModal;
  let store: Store<{app: {
    pokemonsList: [],
    pagesSearched: [1]
  }}>;

  beforeEach(() => {
    fixture = new AddCommentaryComponent(modalService, store)

    fixture.form.patchValue({
      commentary: 'nice',
      name: 'charizard'
    })
  });


  test('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
