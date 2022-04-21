import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DriverMapService } from './driver-map.service';

describe('DriverMapService', () => {
  let service: DriverMapService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
