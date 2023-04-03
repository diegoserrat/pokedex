import { SharedModule } from './../../shared.module';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { PaginationComponent } from './pagination.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

describe('PaginationComponent', () => {
  let injector: TestBed;
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  let store: MockStore;
  const initialState = {
    pokemonsList: [],
    pagesSearched: [1]
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NgbPaginationModule
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
  });

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
