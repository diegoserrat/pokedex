import { SharedModule } from './../../shared.module';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AddCommentaryComponent } from './add-commentary.component';

describe('AddCommentaryComponent', () => {
  let injector: TestBed;
  let component: AddCommentaryComponent;
  let fixture: ComponentFixture<AddCommentaryComponent>;

  let store: MockStore;
  const initialState = {
    pokemonsList: [],
    pagesSearched: [1]
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
      providers: [
        provideMockStore({ initialState }),
        NgbActiveModal
      ]
    })
  });

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(AddCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
