import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminLoginComponent } from './modules/admin/components/admin-login/admin-login.component';
import { AdminLogoutComponent } from './modules/admin/components/admin-logout/admin-logout.component';
import { BookingDetailsComponent } from './modules/admin/components/booking-details/booking-details.component';
import { BookingListComponent } from './modules/admin/components/booking-list/booking-list.component';
import { AmbulanceListComponent } from './modules/ambulance/components/ambulance-list/ambulance-list.component';
import { AmbulanceRegistrationComponent } from './modules/ambulance/components/ambulance-registration/ambulance-registration.component';
import { AmbulanceUpdateComponent } from './modules/ambulance/components/ambulance-update/ambulance-update.component';
import { DriverApplicantListComponent } from './modules/driver/component/driver-applicant-list/driver-applicant-list.component';
import { DriverHospitalMapComponent } from './modules/driver/component/driver-hospital-map/driver-hospital-map.component';
import { DriverListComponent } from './modules/driver/component/driver-list/driver-list.component';
import { DriverLoginComponent } from './modules/driver/component/driver-login/driver-login.component';
import { DriverToUserMapsComponent } from './modules/driver/component/driver-to-user-maps/driver-to-user-maps.component';
import { HomeComponent } from './modules/home/home.component';
import { HospitalsListComponent } from './modules/hospital/components/hospitals-list/hospitals-list.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
{ path: 'Customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule) }, 
{ path: 'Driver', loadChildren: () => import('./modules/driver/driver.module').then(m => m.DriverModule) }, 
{ path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }, 
{ path: 'ambulance', loadChildren: () => import('./modules/ambulance/ambulance.module').then(m => m.AmbulanceModule) }, 
{ path: 'Hospital', loadChildren: () => import('./modules/hospital/hospital.module').then(m => m.HospitalModule)},
{path:'login',component:AdminLoginComponent},
{path:'dLogin',component:DriverLoginComponent},
//{path:'',component:DriverHospitalMapComponent},
//{path:'',component:DriverToUserMapsComponent},
{path:'',component:HomeComponent},
{path:'home',component:AdminComponent,canActivate:[AuthGuardService]},
{path:'home/bookingDetails',component:BookingDetailsComponent,canActivate:[AuthGuardService]},
{path:'home/bookingList',component:BookingListComponent,canActivate:[AuthGuardService]},
{path:'home/ambulancelist',component:AmbulanceListComponent,canActivate:[AuthGuardService]},
{path:'home/driver',component:DriverListComponent,canActivate:[AuthGuardService]},
{path:'home/applicantsList',component:DriverApplicantListComponent,canActivate:[AuthGuardService]},
{path:'home/hospital',component:HospitalsListComponent,canActivate:[AuthGuardService]},
{path:'home/logout',component:AdminLogoutComponent,canActivate:[AuthGuardService]} 
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
