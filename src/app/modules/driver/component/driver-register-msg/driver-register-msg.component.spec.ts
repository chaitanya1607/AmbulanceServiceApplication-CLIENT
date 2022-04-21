import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRegisterMsgComponent } from './driver-register-msg.component';

describe('DriverRegisterMsgComponent', () => {
  let component: DriverRegisterMsgComponent;
  let fixture: ComponentFixture<DriverRegisterMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverRegisterMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverRegisterMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
