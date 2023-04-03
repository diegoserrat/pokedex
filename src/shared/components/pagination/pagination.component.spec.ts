import { MockStore } from '@ngrx/store/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let fixture: PaginationComponent;
  let store: MockStore;

  beforeEach(() => {
    fixture = new PaginationComponent(store)
  });

  test('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
