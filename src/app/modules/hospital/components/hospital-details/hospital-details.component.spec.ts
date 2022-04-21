import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HospitalServiceStub } from '../../hospital-service-stub';
import { HospitalService } from '../../service/hospital.service';

import { HospitalDetailsComponent } from './hospital-details.component';

describe('HospitalDetailsComponent', () => {
  let component: HospitalDetailsComponent;
  let fixture: ComponentFixture<HospitalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalDetailsComponent ],
      imports: [RouterTestingModule],
      providers: [{provide:HospitalService,useClass:HospitalServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
