import { TestBed } from '@angular/core/testing';

import { AuthGuardChildGuard } from './auth-guard-child.guard';

describe('AuthGuardChildGuard', () => {
  let guard: AuthGuardChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuardChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
