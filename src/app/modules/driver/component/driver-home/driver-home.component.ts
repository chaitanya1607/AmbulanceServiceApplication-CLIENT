import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Ambulance } from 'src/app/modules/ambulance/model/ambulance';
import { Driver } from '../../model/driver';
import { DriverAuthenticationService } from '../../services/driver-authentication.service';
import { DriverService } from '../../services/driver.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.component.html',
  styleUrls: ['./driver-home.component.css']
})
export class DriverHomeComponent implements OnInit{
  isSpinning=false;

  driverId:number;
  driver:Driver;
  ambulance:Ambulance;
  isAmbulanceAvailable:boolean = false;
  constructor(private route:ActivatedRoute,private driverService:DriverService,private router:Router,private driverAuthService:DriverAuthenticationService) { }


  ngOnInit(): void {
    this.isSpinning=true;
   this.driverId=this.route.snapshot.params['driverId'];
   this.driver=new Driver();

   this.ambulance =new Ambulance();
   
   this.driverService.getAllottedAmbulance(this.driverId).subscribe(data=>{
     if(data['Error']==true){
      this.isAmbulanceAvailable = false;
      Swal.fire(data['message']);
     }else{
      this.isAmbulanceAvailable = true;
      this.ambulance = data['Body'];
      console.log(this.ambulance);
    }
    this.isSpinning=false;
     
   });
   
   this.getDriverCurrentLocation();
  
 }

 getDriverCurrentLocation(){
  this.driverService.getDriver(this.driverId).subscribe(data=>{
    this.driver=data;
    if(navigator){
     navigator.geolocation.getCurrentPosition(pos=>
      {
        this.driver.latitude=pos.coords.latitude;
        this.driver.longitude=pos.coords.longitude;
        // update coordinates only method....
        // this.driverService.updateDriverCoordinates(this.driver.latitude,this.driver.longitude,this.driverId).subscribe(
        //   data=>{
        //     console.log(data['message']);
        //     this.watchPositionMethod();
        //   } 
        // )
               
      });
    }else
    {Swal.fire('Turn on the GPS!','Geolocation is not turned on','error');}
   });
 }

  watchPositionMethod() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
              this.driver.latitude=position.coords.latitude;
              this.driver.longitude=position.coords.longitude;
              // update coordinates only method....
              this.driverService.updateDriverCoordinates(this.driver.latitude,this.driver.longitude,this.driverId).subscribe(
                data=>{
                  console.log(data['message']);
                }
              )
                     
            });
    } else {
      // alert("Geolocation is not supported by this browser.");
      Swal.fire('Turn on the GPS!','Geolocation is not turned on','error');
    }
  }
  getAmbulance(){

  }
  navigateToUser(){
    this.router.navigate(['navigateToUser',this.driverId])
  }
// logOut(){
//   this.router.navigate(['dLogout']);
// }
logOut(){
  this.driverService.submitAmbulance(this.driverId).subscribe(data=>console.log(data['message']));
  this.router.navigate(['dLogout']);
}


}
