import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';
import { AmbulanceModule } from './modules/ambulance/ambulance.module';
import { CommonModule } from '@angular/common';
import { HospitalService } from './modules/hospital/service/hospital.service';
import { DriverService } from './modules/driver/services/driver.service';
import { AmbulanceService } from './modules/ambulance/service/ambulance.service';
import { DriverModule } from './modules/driver/driver.module';
import { HospitalModule } from './modules/hospital/hospital.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AdminServiceService } from './modules/admin/admin-service.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { SharedModule } from './shared/shared/shared.module';
import { AdminComponent } from './modules/admin/admin.component';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MobileNumberValidatorDirective } from './modules/driver/validators/mobile-number-validator.directive';
import { HttpInterceptorInterceptor } from './shared/services/http-interceptor.interceptor';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMapsComponent } from './shared/components/navigation-maps/navigation-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AmbulanceModule,
    DriverModule,
    HospitalModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    CommonModule,
    PdfViewerModule,
    SharedModule,
  ],
 
  providers: [HospitalService,DriverService,AmbulanceService,AdminServiceService,{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
