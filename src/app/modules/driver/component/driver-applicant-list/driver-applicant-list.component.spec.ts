import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DriverServiceStub } from '../../services/driver-service-stub';
import { DriverService } from '../../services/driver.service';

import { DriverApplicantListComponent } from './driver-applicant-list.component';

describe('DriverApplicantListComponent', () => {
  let component: DriverApplicantListComponent;
  let fixture: ComponentFixture<DriverApplicantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverApplicantListComponent ],
      imports: [RouterTestingModule],
      providers:[{provide:DriverService, useClass:DriverServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverApplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
