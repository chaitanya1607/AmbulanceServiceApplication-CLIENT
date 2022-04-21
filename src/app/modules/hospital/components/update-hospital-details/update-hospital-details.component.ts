import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from '../../model/hospital';
import { HospitalService } from '../../service/hospital.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-hospital-details',
  templateUrl: './update-hospital-details.component.html',
  styleUrls: ['./update-hospital-details.component.css']
})
export class UpdateHospitalDetailsComponent implements OnInit {

  hospitalRegistrationFile:any;

  // for viewing data
  hospital:Hospital = new Hospital();
  id:number;
  certificate:any;
  base64Data:any;
  isCertificateReady=false;
  error:any;
  
  submitted = false;
  isSpinning=true;
  constructor(private hospitalService:HospitalService,
    private router:Router, private route:ActivatedRoute) { }
    
    ngOnInit(): void {
      this.hospital=new Hospital();
      this.id = this.route.snapshot.params['id'];
      this.hospitalService.getHospital(this.id)
      .subscribe(
        data =>{
          this.hospital=data;
          console.log(this.hospital);
          this.isSpinning=false;
        }
        // , error=>{
        //   console.log(error)
        //   alert(this.error=error);
        // }
      );
      this.isCertificateReady=false;
    } // for loading the already existing data

    viewCertificate(){
      console.log("viewing pdf takes time...");
      this.base64Data = this.hospital.registrationFile;
      console.log(this.base64Data);
      this.certificate = 'data:image/jpeg;base64,'+this.base64Data;
      this.isCertificateReady=true;
      console.log("pdf is rendered");
    } // for viewing the certificate

    onRegistrationFileChange(event){
      if(event.target.files[0].type!="application/pdf"){
        Swal.fire('Hospital Registration Needed!!', 'Please upload Registration Document only PDF', 'warning')
      }else{
        this.hospitalRegistrationFile =event.target.files[0];
      }
    }
    
    
    gotoList(){
      Swal.fire('Hospital Updated!!','Hospital Updated Successfully','success');
      this.router.navigate(['hospital']);  
    }

    onSubmit(){
        this.isSpinning=true;
      const formData = new FormData();
      formData.append("hospital",JSON.stringify(this.hospital));
      if(this.hospitalRegistrationFile!=undefined){
        formData.append("hospitalRegistrationFile",this.hospitalRegistrationFile);
      }
      this.id=this.route.snapshot.params['id'];
      this.hospitalService.updateHospital(this.id,formData).subscribe(
        data => {
          console.log(data);
          this.gotoList();
        },error=>console.log(error));
        this.submitted=true;
      }
      
      goBack(){
        this.gotoList();
      }
      closeCertificate(){
        this.isCertificateReady=false;
      }
      
    }
    
    
   /*
    updateHospitalForm =this.formBuilder.group(
      {
        hospitalName:['',[Validators.required]],
        phoneNumber:['',[Validators.required]],
        address:['',[Validators.required]],
        speciality:['',[Validators.required]]
      }
    )
    */
 /*
  onSubmit(updateHospitalForm:FormGroup){
    if(updateHospitalForm.valid){
        const hospital = updateHospitalForm.value;
        const formData = new FormData();
        formData.append("hospital",JSON.stringify(hospital));
        formData.append("registrationFile", this.registrationFile);
        this.id=this.route.snapshot.params['id'];
       this.hospitalService.updateHospital(this.id,formData).subscribe(
         data => {
           console.log(data);
           this.gotoList();
           this.isSpinning=false;
         },error=>console.log(error));
      }
      this.submitted=true;
      this.gotoList();
    }
   */
 
 

