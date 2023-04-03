import { BtnAddComponent } from './btn-add.component';

describe('BtnAddComponent', () => {
  let fixture: BtnAddComponent
  let modalServiceSpy: any;

  beforeEach(() => {
    modalServiceSpy = {
      open: jest.fn()
    }

    fixture = new BtnAddComponent(modalServiceSpy)
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
