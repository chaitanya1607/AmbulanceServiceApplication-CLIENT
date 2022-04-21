import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMapsComponent } from './navigation-maps.component';

describe('NavigationMapsComponent', () => {
  let component: NavigationMapsComponent;
  let fixture: ComponentFixture<NavigationMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
