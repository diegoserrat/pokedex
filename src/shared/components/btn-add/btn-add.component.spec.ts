import { BtnAddComponent } from './btn-add.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export class MockNgbModalRef {
  componentInstance = { pokemon: {
    id: 1,
    name: 'charizard',
    photoUrl: 'string',
    favorite: false,
    commentary: ''
  }};
  result: Promise<any> = new Promise((resolve, reject) => resolve(true));
}

describe('BtnAddComponent', () => {
  let fixture: BtnAddComponent
  let modalService: NgbModal;
  let mockModalRef: MockNgbModalRef = new MockNgbModalRef();

  beforeEach(() => {
    fixture = new BtnAddComponent(modalService)
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
