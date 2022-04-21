import { Component, OnInit } from '@angular/core';
import { Driver } from '../../model/driver';
import { Observable } from 'rxjs';
import { DriverService } from '../../services/driver.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-driver-applicant-details',
  templateUrl: './driver-applicant-details.component.html',
  styleUrls: ['./driver-applicant-details.component.css']
})
export class DriverApplicantDetailsComponent implements OnInit {
  driverId:number;
  isSpinning=true;
  driver:Driver;
  photo:any;
  base64Data:any;
  license:any;
  isLicense=false;
  isAadhar=false;
  aadhar:any;
  cprCourse:boolean;
  blsCourse:boolean;
  evocCourse:boolean;
  criminalRecord:boolean;
  mail:any;

  
  constructor(
    private driverService:DriverService, 
    private router:Router, 
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isSpinning=true;
    this.isAadhar=false;
    this.isLicense=false;
    this.driver = new Driver();
    this.driverId = this.route.snapshot.params['driverId'];
    this.driverService.getDriver(this.driverId)
    .subscribe(data =>{
      this.isSpinning=false;
      this.driver = data;
      this.driverId=data.driverId;
      this.cprCourse=data.cprCourse;
      this.blsCourse=data.blsCourse;
      this.evocCourse=data.evocCourse;
      this.criminalRecord=data.criminalRecord;
      this.base64Data=this.driver.photo;
      this.photo='data:image/jpeg;base64,'+this.base64Data;
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
  
  accepted(){
    this.isSpinning=true;
    console.log(sessionStorage.getItem('uname'));
    this.driverService.sendMail(this.driverId)
    .subscribe(mail =>{
      this.mail=mail;
      
      console.log(this.mail);
      Swal.fire('Driver Added!!','Driver Added to the Company','success');
      this.gotoList();
    })
    
  }

  rejected(){
    this.isSpinning=true;
    console.log(this.driverId+"Hellooooooo");
    console.log(sessionStorage.getItem('uname'));
    this.driverService.rejectMail(this.driverId)
    .subscribe(mail =>{
      Swal.fire('Driver Applicant Removed!!','Driver Removed from the Applicants','success');
      this.mail=mail;
      // this.gotoList();
      this.gotoList();
    })
  
  }closeLicence(){
    this.isLicense=false;
  }closeAadhar(){
    this.isAadhar=false;
  }


    gotoList(){
      this.router.navigate(['applicantsList']);
    }
}
