import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DriverServiceStub } from '../../services/driver-service-stub';
import { DriverService } from '../../services/driver.service';

import { RecoveryMailComponent } from './recovery-mail.component';

describe('RecoveryMailComponent', () => {
  let component: RecoveryMailComponent;
  let fixture: ComponentFixture<RecoveryMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveryMailComponent ],
      imports: [RouterTestingModule],
      providers: [
        {provide:DriverService, useClass:DriverServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
