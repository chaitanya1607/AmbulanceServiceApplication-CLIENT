import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AmbulanceService } from './ambulance.service';

describe('AmbulanceService', () => {
  let service: AmbulanceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
  
    })
    .compileComponents();
  });


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbulanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
