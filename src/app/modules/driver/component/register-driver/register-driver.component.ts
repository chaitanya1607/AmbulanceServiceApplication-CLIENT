import { Component, OnInit } from '@angular/core';
import { Driver } from '../../model/driver';
import { DriverService } from '../../services/driver.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CustomEqualValidator } from '../../validators/custom-equal-validator.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.component.html',
  styleUrls: ['./register-driver.component.css']
})
export class RegisterDriverComponent implements OnInit {
  aadhar:File;
  photo:File;
  license:File;
  driver:Driver = new Driver();
  submitted=false;
  error:any;
  isError=false;
  isSpinning=true;
  currentDate:any;
  url:any;

  constructor(
    private driverService:DriverService, 
    private router:Router, 
    private fb:FormBuilder, 
    private datePipe:DatePipe
  ) { }

  RegistrationForm=this.fb.group({
    fullName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern('[A-Za-z ]*')]],
    email:['',[Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
    mobileNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]{10}')]],
    gender :['',[Validators.required]],
    dateOfBirth :['',[Validators.required]],
    aadharNumber:['',[Validators.required,Validators.pattern('^([2-9]{1}[0-9]{3})( )([0-9]{4})( )([0-9]{4})$')]],
    address:['',[Validators.required, Validators.minLength(10),Validators.maxLength(100)]],
    drivingLicenceNumber :['',[Validators.required,Validators.pattern('^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$')]],
    cprCourse:['',[Validators.required]],
    blsCourse:['',[Validators.required]],
    evocCourse:['',[Validators.required]],
    criminalRecord:['',[Validators.required]],
    userName:['',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
    password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    confirmPassword:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
  }, {
    validator: CustomEqualValidator('password', 'confirmPassword')
});
  ngOnInit(): void {
    this.isSpinning=false;
  }

  passwordCheck(control){
    if(control.value != null){
      var conPass = control.value;
      var pass = control.root.get('password');
      if(pass){
        var password = pass.value;
        if(conPass !=="" && password !==""){
          if(conPass !== password){
            return {
            passwordValidity:true
            }
          }
          else{
              return null;
          }
        }
      }
    }
  }
  onPhotoChanged(event){
    if(event.target.files[0].type!='image/jpeg'&&event.target.files[0].type!='image/png' ){
      Swal.fire('Photo required!!', 'Please upload Image file only', 'warning')
    }else{
      this.photo = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.photo);
      reader.onload = () => {
        this.url = reader.result; 
      };

  }
}
  onAadharChanged(event){
    if(event.target.files[0].type!="application/pdf"){
    Swal.fire('Aadhar required!!', 'Please upload Aadhar only PDF', 'warning')
    }else{
    this.aadhar=event.target.files[0];
    }
  }
  onLicenseChanged(event){
    if(event.target.files[0].type!="application/pdf"){  
      Swal.fire('Driver License required!!', 'Please upload License only PDF', 'warning')
      }else{
      this.license=event.target.files[0];
      }
  }
  onSubmit(registrationForm:FormGroup){
    if(this.photo==null){
      Swal.fire('Photo required!!','Please upload Photo','warning')
    }
    else if(this.aadhar==null){
      Swal.fire('Aadhar required!!','Please upload Aadhar','warning')
    }
    else if(this.license==null){
      Swal.fire('Driving License required!!','Please upload License','warning')
    }else{
      if(registrationForm.valid){
        this.isSpinning = true;
        const driver = registrationForm.value;
        const formData = new FormData();
        formData.append("driver",JSON.stringify(driver));
        formData.append("photo",this.photo);
        formData.append("aadhar",this.aadhar);
        formData.append("license",this.license);
        this.driverService.registerDriver(formData).subscribe(driver =>{
          this.isSpinning = false;
          if(driver['success']==false){
            Swal.fire('Sorry!!!',driver['message'],'error');
          }
          else{
          Swal.fire('Registered Successfully !!','Please wait for the Admin Authorization','success');
          this.router.navigate(['registrationmsg']);
        }
        })
      }
    }

  }

}
