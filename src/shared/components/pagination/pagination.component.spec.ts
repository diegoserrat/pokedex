import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let fixture: PaginationComponent;
  let storeSpy: any;

  beforeEach(() => {
    storeSpy = {
      dispatch: jest.fn()
    }

    fixture = new PaginationComponent(storeSpy)

    fixture.pageList = [1];
  });

  test('should create', () => {
    expect(fixture).toBeTruthy();
  });

  test('should add a new page to pageList', () => {
    const arrayList = [1, 2];
    fixture.pageChange(2);

    expect(fixture.pageList).toMatchObject(arrayList);
  })
});
