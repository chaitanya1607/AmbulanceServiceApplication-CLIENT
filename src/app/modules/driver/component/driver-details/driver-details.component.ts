import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../../model/driver';
import { DriverUpdateModel } from '../../model/driver-update-model';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  driverId:number;
  driver:DriverUpdateModel;
  photo:any;
  base64Data:any;
  isAadhar=false;
  isLicense=false;
  license:any;
  aadhar:any;
  criminalRecord=false;
  cprCourse:boolean;
  blsCourse:boolean;
  isSpinning=true;
  constructor(
    private driverService:DriverService, 
    private router:Router, 
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isSpinning=true;
    this.driver = new DriverUpdateModel();
    this.driverId = this.route.snapshot.params['id'];
    this.driverService.getDriverDetails(this.driverId)
    .subscribe(data =>{
      this.driver = data;
      this.driverId=data.driverId;
      this.cprCourse=data.cprCourse;
      this.blsCourse=data.blsCourse;
      this.base64Data=data.photo;
      this.photo='data:image/jpeg;base64,'+this.base64Data;
      this.criminalRecord=data.criminalRecord;
      this.isAadhar=false;
      this.isLicense=false;
      this.isSpinning=false;
    });
    
    

  }
  // viewPhoto(){
  //     this.base64Data=this.driver.photo.picByte;
  //     this.photo='data:image/jpeg;base64,'+this.base64Data;
  // }
  viewLicense(){
    this.base64Data=this.driver.license;
    this.license='data:image/jpeg;base64,'+this.base64Data;
    this.isLicense=true;
    this.isAadhar=false;
  }
  viewAadhar(){
    this.base64Data=this.driver.aadhar;
    this.aadhar='data:image/jpeg;base64,'+this.base64Data;
    this.isAadhar=true;
    this.isLicense=false;
  }
  gotoList(){
    this.router.navigate(['driver']);
  }closeLicence(){
    this.isLicense=false;
  }closeAadhar(){
    this.isAadhar=false;
  }

}
