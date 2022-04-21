import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HospitalComponent } from './hospital.component';
import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';
import { HospitalDetailsComponent } from './components/hospital-details/hospital-details.component';
import { HospitalsListComponent } from './components/hospitals-list/hospitals-list.component';
import { UpdateHospitalDetailsComponent } from './components/update-hospital-details/update-hospital-details.component';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';


const routes: Routes = [
{ path: '', component: HospitalComponent },
{ path:'hospital', component:HospitalsListComponent,canActivate:[AuthGuardService]},
{path:'addHospitalForm',component:AddHospitalComponent,canActivate:[AuthGuardService]},
{path:'updateHospitalForm/:id',component:UpdateHospitalDetailsComponent,canActivate:[AuthGuardService]},
{path:'hospitalDetails/:id',component:HospitalDetailsComponent,canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }
