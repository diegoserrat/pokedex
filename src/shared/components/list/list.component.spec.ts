import { appReducer } from './../../../core/store/reducers/app.reducer';
import { TestBed, } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { async } from 'rxjs';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let fixture: ListComponent;
  let store: MockStore;

  beforeEach(() => {

    fixture = new ListComponent(store)

    fixture.listItem = [ {
      id: 1,
      name: 'charizard',
      photoUrl: '',
      favorite: true,
      commentary: ''
    }]

    fixture.pokemonsListFavorite = [{
      id: 1,
      name: 'charizard',
      photoUrl: '',
      favorite: true,
      commentary: ''
    }]

    console.log(store);
  });

  test('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
