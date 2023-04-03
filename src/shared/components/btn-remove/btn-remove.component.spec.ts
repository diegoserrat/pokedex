import { BtnRemoveComponent } from './btn-remove.component';

describe('BtnRemoveComponent', () => {
  let fixture: BtnRemoveComponent
  let activeModalSpy: any;

  beforeEach(() => {
    activeModalSpy = {
      open: jest.fn()
    }

    fixture = new BtnRemoveComponent(activeModalSpy)

    fixture.pokemon = { id: 1, name: 'charizard', photoUrl: '', favorite: false, commentary: '' };
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
