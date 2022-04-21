import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CustomerserviceService } from './customerservice.service';

describe('CustomerserviceService', () => {
  let service: CustomerserviceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
  
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
