import { BtnAddComponent } from './btn-add.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared.module';

describe('BtnAddComponent', () => {
  let injector: TestBed;
  let component: BtnAddComponent;
  let fixture: ComponentFixture<BtnAddComponent>;

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
    fixture = TestBed.createComponent(BtnAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
