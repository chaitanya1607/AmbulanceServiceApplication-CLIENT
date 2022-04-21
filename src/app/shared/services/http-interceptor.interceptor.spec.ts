import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';

describe('HttpInterceptorInterceptor', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule]
    })
    .compileComponents();
  });
  
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpInterceptorInterceptor = TestBed.inject(HttpInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
