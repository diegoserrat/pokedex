import { MockStore} from '@ngrx/store/testing';

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
  });

  test('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
