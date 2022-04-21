import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../../model/driver';
import { DriverAuthenticationService } from '../../services/driver-authentication.service';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.css']
})
export class DriverLoginComponent implements OnInit {

user:string;
passWd:string;
errorMessage=false;
error: any;
isSpinning=false;
driverId:number;
name:string;
driver:Driver;

  constructor(private router:Router,private driverAuthService:DriverAuthenticationService,private route:ActivatedRoute,private driveService:DriverService) { }

  ngOnInit(): void {
    this.driver= new Driver();
    
  }

onLogin(){
  this.isSpinning=true;
  this.driverAuthService.authenticate(this.user,this.passWd).subscribe(text=>{
    this.isSpinning=true;
    if(text==="driver"){
      sessionStorage.setItem('uname',this.user);
      sessionStorage.setItem('pword',this.passWd);
      sessionStorage.setItem('role','driver');
      this.name=this.user;
     this.driveService.getDriverByName(this.user).subscribe(data=>{
      this.isSpinning=true;
       console.log(this.user);
       console.log(data);
        this.driver=data;
        this.driverId=data.driverId;
        this.router.navigate(['driverHome',this.driverId]);
      });
      
    }
  });
}

register(){
  this.router.navigate(['registerDriver']);
}

}
