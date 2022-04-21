import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../../../model/driver';
import { DriverService } from '../../../services/driver.service';
import Swal from 'sweetalert2';
import { DriverUpdateModel } from '../../../model/driver-update-model';



@Component({
  selector: 'app-driver-update',
  templateUrl: './driver-update.component.html',
  styleUrls: ['./driver-update.component.css']
})
export class DriverUpdateComponent implements OnInit {
  img:any;
  aadhar:File;
  license:File;
  driverId:number;
  driver:Driver;
  photo:any;
  currentAadhar:any;
  isblsCourse:boolean=false;
  iscprCourse:boolean=false;
  currentLicense:any;
  submitted:boolean = false;
  base64Data: any;
  isAadhar:boolean = false;
  isLicence:boolean = false;
  isSpinning=true;
  constructor(
    private driverService:DriverService,
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
  ) { }
  ngOnInit(): void {
    this.img="../../assets/ambulance.png";
    this.isSpinning=true;
      this.submitted=false;
    this.driver=new Driver();
    this.driverId = this.route.snapshot.params['driverId'];
    this.driverService.getDriver(this.driverId)
    .subscribe(data =>{
      console.log(data)
      this.driver = data;
      this.isAadhar = false;
      this.isLicence = false;
      this.isSpinning=false;
      this.isblsCourse=data.blsCourse;
      this.iscprCourse=data.cprCourse;
      this.base64Data=data.photo;
      this.photo='data:image/jpeg;base64,'+this.base64Data;
    },error=>console.log(error));
    
  }
  onSubmit(){
    this.isSpinning=true;
    const driver=this.driver
    // const driver=updationForm.value;
    const formData=new FormData();

    if(this.license==undefined&&this.aadhar==undefined){
      formData.append("driver",JSON.stringify(driver));
    }
    else if(this.license==undefined&&this.aadhar!=undefined){
      formData.append("driver",JSON.stringify(driver));
      formData.append("aadhar",this.aadhar);
    }
    else if(this.license!=undefined&&this.aadhar==undefined){
      formData.append("driver",JSON.stringify(driver));
      formData.append("license",this.license);
    }
    else {
      formData.append("driver",JSON.stringify(driver));
      formData.append("aadhar",this.aadhar);
      formData.append("license",this.license);

    }

      formData.append("driver",JSON.stringify(driver));
      formData.append("aadhar",this.aadhar);
      formData.append("license",this.license);
      this.driverService.updateDriver(this.driverId,formData)
      .subscribe(data =>{
        console.log(data);
        this.driver = new Driver();
        this.gotoList();
      },error=>console.log(error));
      this.submitted = true;
      
      
    }
    
    gotoList() {
    Swal.fire('Driver Updated!!','Driver Updated Successfully','success');
    this.router.navigate(['driver']);
  }
  onAadharChanged(event){
    if(event.target.files[0].type!="application/pdf"){
      Swal.fire('Aadhar needed!!', 'Please upload Aadhar only PDF', 'warning')
    }else{
    this.aadhar = event.target.files[0];
    }
  }
  onLicenseChanged(event){
    if(event.target.files[0].type!="application/pdf"){
      Swal.fire('Driving License needed!!', 'Please upload License only PDF', 'warning');
    }else{
    this.license = event.target.files[0];
    }
  }
  viewLicense(){
      this.base64Data=this.driver.license;
      this.currentLicense='data:image/jpeg;base64,'+this.base64Data;
      this.isLicence=true;
      this.isAadhar=false;
    }
  
  viewAadhar(){
    this.base64Data=this.driver.aadhar;
    console.log(this.driver.aadhar);
    this.currentAadhar='data:image/jpeg;base64,'+this.base64Data;
    this.isAadhar=true;
    this.isLicence=false;
    }closeLicence(){
      this.isLicence=false;
    }closeAadhar(){
      this.isAadhar=false;
    }

    // openExternalLink(event:any):void{
    //   const textLayer = event.source.textLayerDiv;
    //   const annotationLayer = textLayer.nextElementSibling;
    //   const anchorElements = annotationLayer.getElementsByTagName('a');
    //   for(let i=0;i<anchorElements.length;i++){
    //     anchorElements[i].setAttribute('target','_blank');
    //   }

    // }
    // textLayerRendered(event:CustomEvent) {
    //   let externalLink: HTMLCollectionOf<HTMLAnchorElement>;
    //   const pdfReport = document.getElementById('pdf-report-id');
    //   if(pdfReport){
    //     externalLink=pdfReport.getElementsByTagName('a');

    //   }
    //   for(let i =0;i< externalLink.length;i++){
    //     externalLink[i].setAttribute('target','_blank');

    //   }


    // }
  
}
