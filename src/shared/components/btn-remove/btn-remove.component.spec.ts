import { SharedModule } from './../../shared.module';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BtnRemoveComponent } from './btn-remove.component';

describe('BtnRemoveComponent', () => {
  let injector: TestBed;
  let component: BtnRemoveComponent;
  let fixture: ComponentFixture<BtnRemoveComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      providers: [
        NgbModal
      ]
    })
  });

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(BtnRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
