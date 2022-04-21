import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DriverAuthenticationServiceStub } from '../../driver-authentication-service-stub';
import { DriverAuthenticationService } from '../../services/driver-authentication.service';
import { DriverServiceStub } from '../../services/driver-service-stub';
import { DriverService } from '../../services/driver.service';

import { DriverLoginComponent } from './driver-login.component';

describe('DriverLoginComponent', () => {
  let component: DriverLoginComponent;
  let fixture: ComponentFixture<DriverLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverLoginComponent ],
      imports: [RouterTestingModule],
      providers: [{provide:DriverAuthenticationService, useClass:DriverAuthenticationServiceStub},
        {provide:DriverService, useClass:DriverServiceStub},
        {provider:FormBuilder}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
