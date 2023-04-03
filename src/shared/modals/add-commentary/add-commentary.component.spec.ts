import { AppState } from './../../../core/store/app.state';
import { SharedModule } from './../../shared.module';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AddCommentaryComponent } from './add-commentary.component';

describe('AddCommentaryComponent', () => {
  let fixture: AddCommentaryComponent
  let modalServiceSpy: any;
  let storeSpy: any;

  beforeEach(() => {
    storeSpy = {
      dispatch: jest.fn(),
      pipe: jest.fn()
    }

    modalServiceSpy = {
      close: jest.fn()
    }

    fixture = new AddCommentaryComponent(modalServiceSpy, storeSpy)

    fixture.form.patchValue({
      commentary: 'nice',
      name: 'charizard'
    })

    fixture.pokemonsList = [{ id: 1, name: 'charizard', photoUrl: '', favorite: false, commentary: 'test' }];
    fixture.id = 1;
  });


  test('should create', () => {
    expect(fixture).toBeTruthy();
  });

  test('should call save and update pokemonsList', () => {
    fixture.save();

    expect(fixture.pokemonsList[0].commentary).toBe('nice');
  })
});
