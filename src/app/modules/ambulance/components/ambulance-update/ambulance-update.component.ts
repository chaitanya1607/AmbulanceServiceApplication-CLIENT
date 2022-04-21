import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ambulance } from '../../model/ambulance';
import { AmbulanceService } from '../../service/ambulance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ambulance-update',
  templateUrl: './ambulance-update.component.html',
  styleUrls: ['./ambulance-update.component.css'],
  providers:[DatePipe],
})
export class AmbulanceUpdateComponent implements OnInit {


  ambulanceNumber:String;
  ownerAadhar:File;
  vehicalInsurance:File;
  rCBook:File;
  ambulance:Ambulance;
  submitted=false;
  base64Data:any;
  currentRcBook:any;
  currentVehicalInsurance:any;
  currentOwnerAadhar:any;
  isOwnerAadhar=false;
  isVehicalInsurance=false;
  isRcBook=false;
  vehicalRegistrationDate:Date;
  insuranceValidity:any;
  minInsuranceValidityDate:any;
  minVehicleRegistrationDate:any;
  error:any;
  isError=false;
  isSpinning=true;
  currentDate:any;
  equipmentList: any=[
    {id:1,name:"OXYGEN CYLINDER",isChecked:false},
    {id:2,name:"STRETCHER",isChecked:false},
    {id:3,name:"DEFIBRILLATOR",isChecked:false},
    {id:4,name:"ECG",isChecked:false},
    {id:5,name:"PULSE OXIMETER",isChecked:false}
  ];
  
  constructor(private ambulanceService:AmbulanceService,
    private router:Router, private fb:FormBuilder,private route:ActivatedRoute,private http:HttpClient,private datePipe:DatePipe) {

    }

  ngOnInit(): void {
    this.isSpinning=true;
    this.isError=false;
    this.ambulance=new Ambulance();
    this.ambulanceNumber=this.route.snapshot.params['ambulanceNumber'];
    console.log(this.ambulanceNumber);

    this.currentDate=new Date();
    this.currentDate=this.datePipe.transform(this.currentDate,'yyyy-MM-dd');
    //alert(this.currentDate);
    this.minInsuranceValidityDate=new Date().setFullYear(new Date().getFullYear()+1);
    this.minInsuranceValidityDate=this.datePipe.transform(this.minInsuranceValidityDate,'yyyy-MM-dd');
    this.ambulanceService.getAmbulanceByVehicleNumber(this.ambulanceNumber).subscribe(data=>{
      // alert(data['Error']);
      if(data['Error']===true){
        // alert(data['Exception']);

        Swal.fire('Sorry!!!',data['message'],'error');
            }else{
              // Swal.fire('Ambulance Updated!',data['message'],'success');
        this.ambulance=data;
        this.checkAmbulanceEquipments();
        this.minVehicleRegistrationDate=this.datePipe.transform(this.ambulance.vehicalRegistrationDate,'yyyy-MM-dd');
        console.log(this.ambulance); 
       }
      this.isOwnerAadhar=false;
      this.isVehicalInsurance=false;
      this.isRcBook=false;
      this.isSpinning=false;
    },
    // error=>{
    //   this.isError=error;
    //   this.isError=true;
    //   alert(error);
    // }
    );
  }
  checkAmbulanceEquipments(){
    console.log(this.equipmentList+"Hellooooooo");
    this.equipmentList.forEach(element => {
      for(let i=0;i<this.ambulance.equipments.length;i++){
        if(element.name===this.ambulance.equipments[i]){
               element.isChecked=true;
              }
      }
    });
    this.equipmentList.forEach(element => {
      console.log(element.isChecked+element.name);    
    });
  }
  onSubmit(){
    this.isSpinning=true;
    if(this.vehicalRegistrationDate<this.ambulance.vehicalRegistrationDate){
      Swal.fire('Invalid Date Entry!!','Your vehical registration date is less than the old registration date please choose the valid date','error');
    }else{
    this.ambulance.equipments=[];
    this.addEquipmentsToAmbulance();
    //alert(this.vehicalRegistrationDate);
      if(this.vehicalRegistrationDate!=undefined){
        this.ambulance.vehicalRegistrationDate=this.vehicalRegistrationDate;
      }if(this.insuranceValidity!=undefined){
        this.ambulance.insuranceValidity=this.insuranceValidity;
      }
      const ambulance=this.ambulance;
      console.log(ambulance);
      const formData=new FormData();
     
    if(this.rCBook==undefined&&this.vehicalInsurance==undefined&&this.ownerAadhar==undefined){
      console.log("hello");
      formData.append("ambulance",JSON.stringify(ambulance));
     
    }else if(this.rCBook==undefined&&this.vehicalInsurance==undefined&&this.ownerAadhar!=undefined){
      formData.append("ambulance",JSON.stringify(ambulance));
      formData.append("ownerAadhar",this.ownerAadhar);

    }else if(this.rCBook==undefined&&this.vehicalInsurance!=undefined&&this.ownerAadhar==undefined){
      formData.append("ambulance",JSON.stringify(ambulance));
      formData.append("vehicalInsurance",this.vehicalInsurance);

    }else if(this.rCBook!=undefined&&this.vehicalInsurance==undefined&&this.ownerAadhar==undefined){
      formData.append("ambulance",JSON.stringify(ambulance));
      formData.append("rCBook",this.rCBook);
    }else if(this.rCBook!=undefined&&this.vehicalInsurance!=undefined&&this.ownerAadhar==undefined){
      formData.append("ambulance",JSON.stringify(ambulance));
      formData.append("vehicalInsurance",this.vehicalInsurance);
      formData.append("rCBook",this.rCBook);
    }else if(this.rCBook!=undefined&&this.vehicalInsurance==undefined&&this.ownerAadhar!=undefined){
      formData.append("ambulance",JSON.stringify(ambulance));
      formData.append("ownerAadhar",this.ownerAadhar);
      formData.append("rCBook",this.rCBook);
    }else if(this.rCBook==undefined&&this.vehicalInsurance!=undefined&&this.ownerAadhar!=undefined){
      formData.append("ambulance",JSON.stringify(ambulance));
      formData.append("ownerAadhar",this.ownerAadhar);
      formData.append("vehicalInsurance",this.vehicalInsurance);

    }else{
      formData.append("ambulance",JSON.stringify(ambulance));
      formData.append("ownerAadhar",this.ownerAadhar);
      formData.append("vehicalInsurance",this.vehicalInsurance);
      formData.append("rCBook",this.rCBook);
    }
      this.ambulanceService.updateAmbulance(this.ambulanceNumber,formData).subscribe(response=>{
        if(response['Error']){
        //   alert(response['message']);
        // }else{
        //   alert(response['message']);
        // }
        
        Swal.fire('Sorry!!!',response['message'],'error');
            }else{
              Swal.fire('Ambulance Updated!',response,'success');
            }this.isSpinning=false;
            this.gotoList();
      });
    this.submitted=true;
    
    }
  }
 
  gotoList(){
    this.router.navigate(['ambulancelist']);
  }
  addEquipment(event:any,value:String){
    //alert("hello");
    if(event.target.checked===true){
      this.ambulance.equipments.push(value);
    }else{
      const id=this.ambulance.equipments.indexOf(value);
      this.ambulance.equipments.splice(id,1);
    }
  }
  onRCChanged(event){
    if(event.target.files[0].type!="application/pdf"){
      Swal.fire('RC Book needed!!', 'Please upload RC Book', 'warning')
    }else{
    this.rCBook=event.target.files[0];
    }
  }
  onInsuranceChanged(event){
    if(event.target.files[0].type!="application/pdf"){
      // alert("please upload only pdf files");
      Swal.fire('Vehicle Insurance needed!!', 'Please upload Vehicle insurance document', 'warning')
  
    }else{
      this.vehicalInsurance=event.target.files[0];
    }
    
  }
  onAadharChanged(event){
    if(event.target.files[0].type!="application/pdf"){
      // alert("please upload only pdf files");
      Swal.fire('Aadhaar needed!!', 'Please upload Owner Aadhaar pdf', 'warning')
    }else{
    this.ownerAadhar=event.target.files[0];
    }
  }
  viewRcBook(){
    this.base64Data=this.ambulance.rCBook;
    this.currentRcBook='data:image/jpeg;base64,'+this.base64Data;
    this.isRcBook=true;
    this.isVehicalInsurance=false;
    this.isOwnerAadhar=false;
  }

  viewInsurance(){
    this.base64Data=this.ambulance.vehicalInsurance;
    this.currentVehicalInsurance='data:image/jpeg;base64,'+this.base64Data;
    this.isVehicalInsurance=true;
    this.isOwnerAadhar=false;
    this.isRcBook=false;
  }

  viewOwnerAadhar(){
    this.base64Data=this.ambulance.ownerAadhar;
    this.currentOwnerAadhar='data:image/jpeg;base64,'+this.base64Data;
    this.isOwnerAadhar=true;
    this.isRcBook=false;
    this.isVehicalInsurance=false;
  }

  
  updateVehicalRegistrationDate(event:any){
    this.ambulance.vehicalRegistrationDate=new Date(event);
  }
  updateInsuranceValidity(event:any){
    this.ambulance.insuranceValidity=new Date(event);
  }

  goBack(){
    this.router.navigate(['ambulancelist']);
  }
  closeOwnerAadhar(){
    this.isOwnerAadhar=false;
  }
  closeVehicalInsurance(){
    this.isVehicalInsurance=false;
  }
  closeRcBook(){
    this.isRcBook=false;
  }
  change(equipment){
    //alert("hello");
    equipment.isChecked=!equipment.isChecked;
    this.equipmentList.forEach(element => {
      console.log(element.isChecked+element.name);    
    });
  }
  addEquipmentsToAmbulance(){
    this.equipmentList.forEach(element => {
      if(element.isChecked){
        this.ambulance.equipments.push(element.name);
      }   
    });
  }
}
