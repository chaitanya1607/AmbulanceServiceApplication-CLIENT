import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HospitalServiceStub } from '../../hospital-service-stub';
import { HospitalService } from '../../service/hospital.service';

import { UpdateHospitalDetailsComponent } from './update-hospital-details.component';

describe('UpdateHospitalDetailsComponent', () => {
  let component: UpdateHospitalDetailsComponent;
  let fixture: ComponentFixture<UpdateHospitalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHospitalDetailsComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule],
      providers: [{provide:FormBuilder}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHospitalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
