import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminServiceService } from './admin-service.service';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AdminLogoutComponent } from './components/admin-logout/admin-logout.component';
import { DriverModule } from '../driver/driver.module';
import { HospitalModule } from '../hospital/hospital.module';
import { AmbulanceModule } from '../ambulance/ambulance.module';


@NgModule({
  declarations: [AdminComponent, BookingDetailsComponent, BookingListComponent,AdminLoginComponent, AdminLogoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DriverModule,
    HospitalModule,
    AmbulanceModule
  ],
  providers:[AdminServiceService]
})
export class AdminModule { }
