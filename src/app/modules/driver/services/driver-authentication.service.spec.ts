import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DriverAuthenticationService } from './driver-authentication.service';

describe('DriverAuthenticationService', () => {
  let service: DriverAuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
