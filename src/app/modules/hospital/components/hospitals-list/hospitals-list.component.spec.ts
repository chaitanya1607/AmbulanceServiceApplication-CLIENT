import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HospitalServiceStub } from '../../hospital-service-stub';
import { HospitalService } from '../../service/hospital.service';

import { HospitalsListComponent } from './hospitals-list.component';

describe('HospitalsListComponent', () => {
  let component: HospitalsListComponent;
  let fixture: ComponentFixture<HospitalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalsListComponent ],
      imports: [ RouterTestingModule],
      providers:[{provide:HospitalService,useClass:HospitalServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
