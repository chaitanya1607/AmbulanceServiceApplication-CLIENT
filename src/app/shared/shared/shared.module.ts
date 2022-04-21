import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../components/loading/loading.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavigationMapsComponent } from '../components/navigation-maps/navigation-maps.component';



@NgModule({
  declarations: [LoadingComponent,HeaderComponent,FooterComponent,NavigationMapsComponent],
  imports: [
    CommonModule
  ],exports:[LoadingComponent,HeaderComponent,FooterComponent,NavigationMapsComponent]
})
export class SharedModule { }
