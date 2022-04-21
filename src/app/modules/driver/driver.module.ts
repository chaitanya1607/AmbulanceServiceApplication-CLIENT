import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverComponent } from './driver.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverListComponent } from './component/driver-list/driver-list.component';
import { DriverUpdateComponent } from './component/driver-update/driver-update/driver-update.component';
import { DriverDetailsComponent } from './component/driver-details/driver-details.component';
import{PdfViewerModule} from 'ng2-pdf-viewer';
import { BrowserModule } from '@angular/platform-browser';
import { DriverApplicantListComponent } from './component/driver-applicant-list/driver-applicant-list.component';
import { DriverApplicantDetailsComponent } from './component/driver-applicant-details/driver-applicant-details.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MobileNumberValidatorDirective } from './validators/mobile-number-validator.directive';
import { DriverLoginComponent } from './component/driver-login/driver-login.component';
import { DriverHomeComponent } from './component/driver-home/driver-home.component';
import { DriverHospitalMapComponent } from './component/driver-hospital-map/driver-hospital-map.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { DriverToUserMapsComponent } from './component/driver-to-user-maps/driver-to-user-maps.component';
import { HomeComponent } from '../home/home.component';
import { RegisterDriverComponent } from './component/register-driver/register-driver.component';
import { RecoveryMailComponent } from './component/recovery-mail/recovery-mail.component';
import { DriverLogoutComponent } from './component/driver-logout/driver-logout.component';
import { DriverRegisterMsgComponent } from './component/driver-register-msg/driver-register-msg.component';

@NgModule({
    declarations: [RegisterDriverComponent,RecoveryMailComponent,DriverComponent,DriverListComponent,DriverUpdateComponent, DriverDetailsComponent, MobileNumberValidatorDirective,DriverApplicantListComponent, DriverApplicantDetailsComponent, DriverLoginComponent, DriverHomeComponent, DriverHospitalMapComponent,DriverToUserMapsComponent, RegisterDriverComponent, RecoveryMailComponent, DriverLogoutComponent, DriverRegisterMsgComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAfWoqJXChByVrMjRqxDjiy6opJkm9x0LU'
    }),
    AgmDirectionModule,
  ]
})
export class DriverModule { }
