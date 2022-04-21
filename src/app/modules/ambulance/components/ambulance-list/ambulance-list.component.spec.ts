import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AmbulanceServiceStub } from '../../ambulance-service-stub';
import { AmbulanceService } from '../../service/ambulance.service';

import { AmbulanceListComponent } from './ambulance-list.component';

describe('AmbulanceListComponent', () => {
  let component: AmbulanceListComponent;
  let fixture: ComponentFixture<AmbulanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbulanceListComponent ],
      imports: [RouterTestingModule],
      providers: [{provide:AmbulanceService,useClass:AmbulanceServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
