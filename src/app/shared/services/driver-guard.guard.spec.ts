import { TestBed } from '@angular/core/testing';

import { DriverGuardGuard } from './driver-guard.guard';

describe('DriverGuardGuard', () => {
  let guard: DriverGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DriverGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
