import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';

import { AmbulanceListComponent } from './components/ambulance-list/ambulance-list.component';
import { AmbulanceRegistrationComponent } from './components/ambulance-registration/ambulance-registration.component';
import { AmbulanceUpdateComponent } from './components/ambulance-update/ambulance-update.component';
import { AmbulanceViewComponent } from './components/ambulance-view/ambulance-view.component';


const routes: Routes = [{ path: 'ambulancelist', component: AmbulanceListComponent ,canActivate:[AuthGuardService]},
{path:'addNewAmbulance',component:AmbulanceRegistrationComponent,canActivate:[AuthGuardService]},
{path:'viewAmbulance/:ambulanceNumber',component:AmbulanceViewComponent,canActivate:[AuthGuardService]},
{path:'updateAmbulance/:ambulanceNumber',component:AmbulanceUpdateComponent,canActivate:[AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbulanceRoutingModule { }
