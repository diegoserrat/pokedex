import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './../../shared.module';
import { RemoveCommentaryComponent } from './remove-commentary.component';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('RemoveCommentaryComponent', () => {
  let injector: TestBed;
  let component: RemoveCommentaryComponent;
  let fixture: ComponentFixture<RemoveCommentaryComponent>;

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
    fixture = TestBed.createComponent(RemoveCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
