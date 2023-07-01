import { TestBed } from '@angular/core/testing';

import { HaschangesGuard } from './haschanges.guard';

describe('HaschangesGuard', () => {
  let guard: HaschangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HaschangesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
