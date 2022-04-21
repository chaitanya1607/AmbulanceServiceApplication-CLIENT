


import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { Customer } from 'src/app/modules/customer/model/customer';
import { CustomerserviceService } from 'src/app/modules/customer/service/customerservice.service';
import { Driver } from '../../model/driver';
import { DriverMapService } from '../../services/driver-map.service';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-driver-to-user-maps',
  templateUrl: './driver-to-user-maps.component.html',
  styleUrls: ['./driver-to-user-maps.component.css']
})
export class DriverToUserMapsComponent implements OnInit, OnChanges{

  public start: string;
  public finish: string;
  public customer:Customer;
  public driverMessage: string;
  public isSpinning=false;
  public driverId:number;
  public constructor(private customerService:CustomerserviceService,private router:Router,private driverService:DriverService,private route:ActivatedRoute) {
      this.start = "37.7397,-121.4252";
      this.finish = "37.6819,-121.7680";
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.getDriverCurrentLocation();
    this.watchPosition();
   /* if(this.start===this.finish){
      this.driverMessage="You have reached your customer";
      this.router.navigate(['customer',1]);
    }*/


  }

  public ngOnInit() { 
    this.driverId=this.route.snapshot.params['driverId'];
    //this.driverId=10;
    this.isSpinning=true;
    this.getDriverCurrentLocation();
  }
  getCustomerById(customerId:number){
    this.customerService.getCustomerById(customerId).subscribe(data=>{
      this.customer=data;
      console.log(data);
      console.log(this.customer);
      this.getCustomerLatitudeAndLongitude();
      this.isSpinning=false;
      this.watchPosition();
    })
    
  }
  getCustomerLatitudeAndLongitude(){
    this.finish=this.customer.latitude+","+this.customer.longitude;
  }
  getDriverCurrentLocation(){
    if(navigator){
      navigator.geolocation.getCurrentPosition(position=>{
        this.start=position.coords.latitude+","+position.coords.longitude;
        this.getCustomerById(1);
        
      });
      
    }

   
  }
  watchPosition(){
    
   let myPosition=navigator.geolocation.watchPosition((position)=>{
    // alert("checking ");
    this.start=position.coords.latitude+","+position.coords.longitude;
    // this.driverService.updateDriverCoordinates(position.coords.latitude,position.coords.longitude,this.driverId).subscribe();
    if(position.coords.latitude===this.customer.latitude && position.coords.longitude===this.customer.longitude){
      alert("you reached destination");
      navigator.geolocation.clearWatch(myPosition);
    //  this.router.navigate(['driverHospital', this.driverId]);
    }
      },(err)=>{
        console.log(err);
      },{
        enableHighAccuracy:true,
        timeout:10000,
        maximumAge:0
      });
  }
  navigateToHospital(){
    this.router.navigate(['driverHospital',this.driverId]);
  }
} 


  // sourceLatitude :any;
  // sourceLongitude : any;

  // destinationLatitude=9.939093;
  // destinationLongitude=78.121719;
  // public jsonObject:any;
  // constructor(private service:DriverMapService){}

  // ngOnInit(){
  //    if(navigator){
  //      navigator.geolocation.getCurrentPosition(pos=>
  //       {
  //         this.sourceLatitude=pos.coords.latitude;
  //         this.sourceLongitude=pos.coords.longitude;
  //         console.log(this.sourceLatitude);
  //         console.log(this.sourceLongitude);
  //         this.getJsonString();
  //       });
       
  //    }
  // }

  // getJsonString(){
  //   this.service.getDistanceAndTime(this.sourceLatitude,this.sourceLongitude,this.destinationLatitude,this.destinationLatitude)
  //    .subscribe(data=>{
  //       this.jsonObject=data;
  //       console.log(this.jsonObject);
  //       console.log(this.jsonObject['routes'][0]['sections'][0]['summary']);
  //    })

  // }

