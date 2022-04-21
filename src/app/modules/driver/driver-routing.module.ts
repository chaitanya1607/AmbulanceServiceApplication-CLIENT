import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverApplicantDetailsComponent } from './component/driver-applicant-details/driver-applicant-details.component';
import { DriverApplicantListComponent } from './component/driver-applicant-list/driver-applicant-list.component';
import { DriverDetailsComponent } from './component/driver-details/driver-details.component';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { DriverListComponent } from './component/driver-list/driver-list.component';
import { DriverUpdateComponent } from './component/driver-update/driver-update/driver-update.component';
import { DriverLoginComponent } from './component/driver-login/driver-login.component';
import { DriverHomeComponent } from './component/driver-home/driver-home.component';
import { DriverHospitalMapComponent } from './component/driver-hospital-map/driver-hospital-map.component';
import { DriverToUserMapsComponent } from './component/driver-to-user-maps/driver-to-user-maps.component';
import { RegisterDriverComponent } from './component/register-driver/register-driver.component';
import { RecoveryMailComponent } from './component/recovery-mail/recovery-mail.component';
import { DriverLogoutComponent } from './component/driver-logout/driver-logout.component';
import { DriverGuardGuard } from 'src/app/shared/services/driver-guard.guard';
import { DriverRegisterMsgComponent } from './component/driver-register-msg/driver-register-msg.component';



const routes: Routes = [
  {path:'registrationmsg', component:DriverRegisterMsgComponent},
  {path:'Driver/dLogin',component:DriverLoginComponent},
  {path:'dLogout',component:DriverLogoutComponent},
  {path:'driverHome/:driverId',component:DriverHomeComponent,canActivate:[DriverGuardGuard]},
  {path:'drivertoUser',component:DriverToUserMapsComponent,canActivate:[DriverGuardGuard]},
  {path:'applicantsList',component:DriverApplicantListComponent,canActivate:[AuthGuardService]},
  { path:'updateDriver/:driverId', component: DriverUpdateComponent,canActivate:[AuthGuardService] },
  { path:'viewDriver/:id',component: DriverDetailsComponent,canActivate:[AuthGuardService]},
  {path:'driver',component:DriverListComponent,canActivate:[AuthGuardService]},
  {path:'registerDriver',component:RegisterDriverComponent},
  {path:'dLogin/recoveryMail',component:RecoveryMailComponent},
  {path:'viewApplicantDriver/:driverId',component: DriverApplicantDetailsComponent,canActivate:[AuthGuardService]},
  {path:'driverHospital/:driverId',component:DriverHospitalMapComponent},
  {path:'navigateToUser/:driverId',component:DriverToUserMapsComponent,canActivate:[DriverGuardGuard]},
];

  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
