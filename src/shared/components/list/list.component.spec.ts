import { CommonModule } from '@angular/common';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BtnAddComponent } from '../btn-add/btn-add.component';
import { BtnRemoveComponent } from '../btn-remove/btn-remove.component';
import { FavoriteComponent } from '../favorite/favorite.component';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let injector: TestBed;
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  let store: MockStore;
  const initialState = {
    pokemonsList: [],
    pagesSearched: [1]
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ListComponent,
        BtnAddComponent,
        BtnRemoveComponent,
        FavoriteComponent
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
  });

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
