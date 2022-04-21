import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ambulance } from '../../model/ambulance';
import { AmbulanceService } from '../../service/ambulance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ambulance-registration',
  templateUrl: './ambulance-registration.component.html',
  styleUrls: ['./ambulance-registration.component.css'],
  providers:[DatePipe],
})
export class AmbulanceRegistrationComponent implements OnInit {

 
  equipmentList: any=[
    {id:1,name:"OXYGEN CYLINDER"},
    {id:2,name:"STRETCHER"},
    {id:3,name:"DEFIBRILLATOR"},
    {id:4,name:"ECG"},
    {id:5,name:"PULSE OXIMETER"}
  ];
  ownerAadhar:File;
  vehicalInsurance:File;
  rCBook:File;
  ambulance:Ambulance=new Ambulance();
  submitted=false;
  error:any;
  isError=false;
  isSpinning=true;
  currentDate:any;
  minInsuranceValidityDate:any;
  constructor(private ambulanceService:AmbulanceService,
    private router:Router, private fb:FormBuilder, private datePipe:DatePipe) {

    }
    RegistrationForm=this.fb.group(
      {vehicalNumber:['',[Validators.required,Validators.pattern('^[A-Z]{2}[ -][0-9]{1,2}[ -][A-Z]{2}[ -][0-9]{4}$')]],
      vehicalRegistrationDate:['',[Validators.required]],
      insuranceValidity:['',[Validators.required]],
      ownerName:['',[Validators.required,Validators.minLength(8),Validators.maxLength(16),Validators.pattern('[A-Za-z ]*')]],
      ownerAddress:['',[Validators.required,Validators.minLength(8), Validators.maxLength(100)]],
      ownerAadharNumber:['',[Validators.required,Validators.pattern('^([2-9]{1}[0-9]{3})( )([0-9]{4})( )([0-9]{4})$')]],
      equipments:this.fb.array([],[])
    });

  ngOnInit(): void {
    this.currentDate=new Date().setDate(new Date().getDate()-1);
    this.currentDate=this.datePipe.transform(this.currentDate,'yyyy-MM-dd');
    this.minInsuranceValidityDate=new Date().setFullYear(new Date().getFullYear()+1);
    this.minInsuranceValidityDate=this.datePipe.transform(this.minInsuranceValidityDate,'yyyy-MM-dd');
    // this.minInsuranceValidityDate=this.minInsuranceValidityDate.getFullYear+1;
    //alert(this.minInsuranceValidityDate)
    this.isError=false;
    this.isSpinning=false;
    
  }
  onSubmit(registrationForm:FormGroup){
    if(this.rCBook==null){
      // alert("Please upload RC Book");
    Swal.fire('RC Book needed!!', 'Please upload RC Book', 'warning')
   }
   else if(this.vehicalInsurance==null){
    Swal.fire('Vehicle Insurance needed!!', 'Please upload Vehicle insurance document', 'warning')
    //  alert("Please upload Vehicle insurance document");
   }
   else if(this.ownerAadhar==null){
    Swal.fire('Aadhaar needed!!', 'Please upload Owner Aadhaar pdf', 'warning')
    // alert("Please upload owner's aadhaar pdf");
   }
   else{
     if(registrationForm.valid){
       this.isSpinning=true;
       const ambulance=registrationForm.value;
       const formData=new FormData();
      formData.append("ambulance",JSON.stringify(ambulance));
      formData.append("ownerAadhar",this.ownerAadhar);
      formData.append("vehicalInsurance",this.vehicalInsurance);
      formData.append("rCBook",this.rCBook);
      this.ambulanceService.createAmbulance(formData).subscribe(response=>{
        this.isSpinning=false;
          Swal.fire('Ambulance Added!!',response,'success');
          this.gotoList();
      },
      // 
      );
     
    }
    
    console.log(this.RegistrationForm.get('vehicalNumber').value);
    this.submitted=true;

   }
    
  }
  
  gotoList(){
    this.router.navigateByUrl('ambulancelist');
  }
  addEquipment(event:any){
   const equipment: FormArray=this.RegistrationForm.get('equipments') as FormArray;
   if(event.target.checked){
     equipment.push(new FormControl(event.target.value));
   }else{
     const index=equipment.controls.findIndex(x=>x.value===event.target.value);
     equipment.removeAt(index);
   }
  }
  onRCChanged(event){
    if(event.target.files[0].type!="application/pdf"){  
    Swal.fire('RC Book needed!!', 'Please upload RC Book only PDF', 'warning')
    }else{
    this.rCBook=event.target.files[0];
    }
  }
  onInsuranceChanged(event){
    if(event.target.files[0].type!="application/pdf"){
    Swal.fire('Insurance Copy needed!!', 'Please upload Insurance only PDF', 'warning')
    }else{
    this.vehicalInsurance=event.target.files[0];
    }
  }
  onAadharChanged(event){
    if(event.target.files[0].type!="application/pdf"){
    Swal.fire('Aadhar needed!!', 'Please upload Aadhar only PDF', 'warning')
    }else{
    this.ownerAadhar=event.target.files[0];
    }
  }

  goBack(){
    this.router.navigate(['ambulancelist']);
  }
  
}
