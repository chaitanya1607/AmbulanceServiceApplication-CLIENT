import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DriverAuthenticationServiceStub } from '../../driver-authentication-service-stub';
import { DriverAuthenticationService } from '../../services/driver-authentication.service';

import { DriverLogoutComponent } from './driver-logout.component';

describe('DriverLogoutComponent', () => {
  let component: DriverLogoutComponent;
  let fixture: ComponentFixture<DriverLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverLogoutComponent ],
      imports: [RouterTestingModule],
      providers: [{provide:DriverAuthenticationService, useClass:DriverAuthenticationServiceStub},
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
