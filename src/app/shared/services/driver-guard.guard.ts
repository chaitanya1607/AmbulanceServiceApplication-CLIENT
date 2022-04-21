import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DriverAuthenticationService } from 'src/app/modules/driver/services/driver-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DriverGuardGuard implements CanActivate {
  constructor(private router:Router,private driverService:DriverAuthenticationService){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(sessionStorage.getItem('role')===this.driverService.isDriverLogin()){
      console.log('driver canActivate');
      console.log(sessionStorage.getItem('role'));
      return true;
    }
    this.router.navigate(['Driver/dLogin']);
    return false;
    
  }
  
}
