import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCommentaryComponent } from './remove-commentary.component';

describe('RemoveCommentaryComponent', () => {
  let component: RemoveCommentaryComponent;
  let fixture: ComponentFixture<RemoveCommentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RemoveCommentaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
