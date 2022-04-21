import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AmbulanceServiceStub } from '../../ambulance-service-stub';
import { AmbulanceService } from '../../service/ambulance.service';

import { AmbulanceRegistrationComponent } from './ambulance-registration.component';

describe('AmbulanceRegistrationComponent', () => {
  let component: AmbulanceRegistrationComponent;
  let fixture: ComponentFixture<AmbulanceRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbulanceRegistrationComponent ],
      imports: [RouterTestingModule],
      providers: [{provide:FormBuilder}, {provide:AmbulanceService,useClass:AmbulanceServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
