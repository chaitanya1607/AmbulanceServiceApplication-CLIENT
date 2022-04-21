import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DriverServiceStub } from '../../../services/driver-service-stub';
import { DriverService } from '../../../services/driver.service';

import { DriverUpdateComponent } from './driver-update.component';

describe('DriverUpdateComponent', () => {
  let component: DriverUpdateComponent;
  let fixture: ComponentFixture<DriverUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverUpdateComponent ],
      imports: [RouterTestingModule],
      providers: [{provider:FormBuilder},
        {provide:DriverService, useClass:DriverServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
