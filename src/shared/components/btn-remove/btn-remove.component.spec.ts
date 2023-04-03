import { SharedModule } from './../../shared.module';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BtnRemoveComponent } from './btn-remove.component';

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

describe('BtnRemoveComponent', () => {
  let fixture: BtnRemoveComponent
  let activeModal: NgbModal;
  let mockModalRef: MockNgbModalRef = new MockNgbModalRef();


  beforeEach(() => {
    fixture = new BtnRemoveComponent(activeModal)
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
