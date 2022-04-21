import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AmbulanceServiceStub } from '../../ambulance-service-stub';
import { AmbulanceService } from '../../service/ambulance.service';

import { AmbulanceUpdateComponent } from './ambulance-update.component';

describe('AmbulanceUpdateComponent', () => {
  let component: AmbulanceUpdateComponent;
  let fixture: ComponentFixture<AmbulanceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbulanceUpdateComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{provide:FormBuilder},{provide:AmbulanceService,useClass:AmbulanceServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
