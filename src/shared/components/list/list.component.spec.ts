import { appReducer } from '../../../core/store/reducers/app.reducer';
import { TestBed, } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { async } from 'rxjs';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let fixture: ListComponent;
  let storeSpy: any;

  beforeEach(() => {
    storeSpy = {
      dispatch: jest.fn()
    }

    fixture = new ListComponent(storeSpy)

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
  });

  test('should create', () => {
    expect(fixture).toBeTruthy();
  });

  test('should test if clickdFavorite was clicked', () => {
    const object = { id: 1, name: 'charizard', photoUrl: '', favorite: false, commentary: '' }
    fixture.clickedFavorite(1);

    expect(fixture.listItem[0]).toMatchObject(object);
  })
});
