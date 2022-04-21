import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DriverServiceStub } from '../../services/driver-service-stub';
import { DriverService } from '../../services/driver.service';

import { DriverApplicantDetailsComponent } from './driver-applicant-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DriverApplicantDetailsComponent', () => {
  let component: DriverApplicantDetailsComponent;
  let fixture: ComponentFixture<DriverApplicantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverApplicantDetailsComponent],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers:[{provide:DriverService, useClass:DriverServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverApplicantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
