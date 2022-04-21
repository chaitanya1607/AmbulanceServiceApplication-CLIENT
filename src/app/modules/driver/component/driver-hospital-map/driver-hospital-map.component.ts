import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/modules/customer/model/customer';
import { CustomerserviceService } from 'src/app/modules/customer/service/customerservice.service';
import { DriverMapService } from '../../services/driver-map.service';
import { DriverService } from '../../services/driver.service';

declare var H: any;
@Component({
  selector: 'app-driver-hospital-map',
  templateUrl: './driver-hospital-map.component.html',
  styleUrls: ['./driver-hospital-map.component.css']
})
export class DriverHospitalMapComponent implements OnInit {

  customerId: number;
  customer:Customer;
  public start: string;
  public finish: string;
  public driverId:number;
  public isSpinning=false;

  public constructor(private mapService:DriverMapService,
    private route: ActivatedRoute,private router: Router,
     private customerService: CustomerserviceService,private driverService:DriverService) {
      this.start = "37.7397,-121.4252";
      this.finish = "37.6819,-121.7680";
  }


   public jsonObject:any;
 

   ngOnInit(){
   
    this.customerId = 1;
    this.isSpinning=true;
     this.driverId= this.route.snapshot.params['driverId'];
     this.navigateMethod();
     
   }

   navigateMethod(){
     if(navigator){
       navigator.geolocation.getCurrentPosition(pos=>
        {
          this.start = pos.coords.latitude+","+pos.coords.longitude;
          console.log("start"+this.start);
          this.getCustomer();
        })
        
      }
     
   }
   getCustomer(){
    this.customerService.getCustomerById(this.customerId)
    .subscribe(
      data=>{
        this.customer = data;
        this.customer.nearByHospital=data['hospital'];
        console.log(this.customer);
        var hospitalLat=this.customer.nearByHospital.latitude;
        var hospitalLng=this.customer.nearByHospital.longitude;
        this.finish=hospitalLat+","+hospitalLng;
        console.log("finish"+this.finish)
        this.isSpinning=false;
      }
      );
      this.watchPosition();
   }
/*
   getHospitalLocation(){
    if(navigator){
      navigator.geolocation.getCurrentPosition(pos=>
       {
         this.start = pos.coords.latitude+","+pos.coords.longitude;
         //this.finish = "13.069087,80.273783"; // have to fetch from the database using customer id
         var hospitalLat=this.customer.nearByHospital.latitude;
         var hospitalLng=this.customer.nearByHospital.longitude;
         this.finish=hospitalLat+","+hospitalLng;
         console.log("Start: "+this.start);
         console.log("End: "+this.finish);
        // this.getJsonString();
      //  this.watchPosition();
       });
      
    }
   }
   */
   
   watchPosition(){
    
    let myPosition=navigator.geolocation.watchPosition((position)=>{
    //  alert("hello");
     this.start = position.coords.latitude+","+position.coords.longitude;
     //this.driverService.updateDriverCoordinates(position.coords.latitude,position.coords.longitude,this.driverId).subscribe();
     if(position.coords.latitude===this.customer.latitude && position.coords.longitude===this.customer.longitude){
       alert("you reached destination");
       navigator.geolocation.clearWatch(myPosition);
     }
       },(err)=>{
         console.log(err);
       },{
         enableHighAccuracy:true,
         maximumAge:0
        });
      }
      

  // getJsonString(){
  //   this.service.getDistanceAndTime(this.lat,this.lng,this.destlat,this.destlong)
  //    .subscribe(data=>{
  //       this.jsonObject=data;
  //       console.log(this.jsonObject);
  //       console.log(this.jsonObject['routes'][0]['sections'][0]['summary']);
  //    })

  // }

  

  

}
