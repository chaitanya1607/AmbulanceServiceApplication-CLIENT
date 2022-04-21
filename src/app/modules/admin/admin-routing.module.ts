import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { AdminComponent } from './admin.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { AdminLogoutComponent } from './components/admin-logout/admin-logout.component';





const routes: Routes = [{ path: 'admin/login', component: AdminLoginComponent },
{path:'home',component:AdminComponent,canActivate:[AuthGuardService]},
{path:'bookingList',component:BookingListComponent,canActivate:[AuthGuardService]},
{path:'bookingDetails/:vehicalNumber',component:BookingDetailsComponent,canActivate:[AuthGuardService]},
{path:'home/logout',component:AdminLogoutComponent,canActivate:[AuthGuardService]},
{path:'',component:HomeComponent,pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
