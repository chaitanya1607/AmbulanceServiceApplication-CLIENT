import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AmbulanceRoutingModule } from './ambulance-routing.module';
import { AmbulanceComponent } from './ambulance.component';
import { AmbulanceRegistrationComponent } from './components/ambulance-registration/ambulance-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AmbulanceListComponent } from './components/ambulance-list/ambulance-list.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AmbulanceViewComponent } from './components/ambulance-view/ambulance-view.component';
import { AmbulanceUpdateComponent } from './components/ambulance-update/ambulance-update.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AdminComponent } from '../admin/admin.component';
import { AdminModule } from '../admin/admin.module';


@NgModule({
  declarations: [AmbulanceComponent, AmbulanceRegistrationComponent,AmbulanceViewComponent, AmbulanceUpdateComponent,AmbulanceListComponent],
  imports: [
    CommonModule,
    AmbulanceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    SharedModule
  ],
  providers:[DatePipe]
 
})
export class AmbulanceModule { }
