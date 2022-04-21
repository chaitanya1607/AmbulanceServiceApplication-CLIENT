import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitalComponent } from './hospital.component';
import { HospitalsListComponent } from './components/hospitals-list/hospitals-list.component';

import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpdateHospitalDetailsComponent } from './components/update-hospital-details/update-hospital-details.component';
import { HospitalDetailsComponent } from './components/hospital-details/hospital-details.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    HospitalComponent,
    HospitalsListComponent,
    AddHospitalComponent,
    UpdateHospitalDetailsComponent,
    HospitalDetailsComponent,
  ],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    SharedModule,
    
  ],
})
export class HospitalModule { }
