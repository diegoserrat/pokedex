import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { RemoveCommentaryComponent } from './remove-commentary.component';

describe('RemoveCommentaryComponent', () => {
  let fixture: RemoveCommentaryComponent
  let activeModalSpy: any;
  let storeSpy: any

  beforeEach(() => {
    storeSpy = {
      dispatch: jest.fn(),
      pipe: jest.fn()
    }

    activeModalSpy = {
      close: jest.fn()
    }

    fixture = new RemoveCommentaryComponent(activeModalSpy, storeSpy)

    fixture.pokemonsList = [{ id: 1, name: 'charizard', photoUrl: '', favorite: false, commentary: 'test' }];
    fixture.id = 1;
  });

  test('should create', () => {
    expect(fixture).toBeTruthy();
  });

  test('should call save and update pokemonsList', () => {
    fixture.exclude();

    expect(fixture.pokemonsList[0].commentary).toBe('');
  })
});
