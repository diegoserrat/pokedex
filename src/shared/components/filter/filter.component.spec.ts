import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let fixture: FilterComponent

  beforeEach(() => {
    fixture = new FilterComponent()

    fixture.form.patchValue({searched: 'cha'})

    fixture.ngOnInit();
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
