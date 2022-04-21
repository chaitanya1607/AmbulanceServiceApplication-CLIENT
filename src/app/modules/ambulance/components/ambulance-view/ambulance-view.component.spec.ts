import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AmbulanceServiceStub } from '../../ambulance-service-stub';
import { AmbulanceService } from '../../service/ambulance.service';

import { AmbulanceViewComponent } from './ambulance-view.component';

describe('AmbulanceViewComponent', () => {
  let component: AmbulanceViewComponent;
  let fixture: ComponentFixture<AmbulanceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbulanceViewComponent ],
      imports: [RouterTestingModule],
      providers: [{provide:AmbulanceService,useClass:AmbulanceServiceStub}]
  
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
