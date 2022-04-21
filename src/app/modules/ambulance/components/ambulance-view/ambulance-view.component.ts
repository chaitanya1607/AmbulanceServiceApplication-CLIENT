
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ambulance } from '../../model/ambulance';
import { AmbulanceService } from '../../service/ambulance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ambulance-view',
  templateUrl: './ambulance-view.component.html',
  styleUrls: ['./ambulance-view.component.css']
})
export class AmbulanceViewComponent implements OnInit {

  ambulance:Ambulance;
  ambulanceNumber:String;
  rcBook:any;
  vehicalInsurance:any;
  ownerAadhar:any;
  base64Data:any;
  isOwnerAadhar=false;
  isVehicalInsurance=false;
  isRcBook=false;
  error:any;
  isError=true;
  isSpinning=true;
  equipmentsList=[];
  constructor(private ambulanceService:AmbulanceService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.isSpinning=true;
    this.ambulance=new Ambulance();
    this.ambulanceNumber=this.route.snapshot.params['ambulanceNumber'];
    console.log(this.ambulanceNumber);
    this.ambulanceService.getAmbulanceByVehicleNumber(this.ambulanceNumber).subscribe(data=>{
      if(data['Error']==true){
               Swal.fire('Sorry!!!',data['message'],'error');
      }else{
        this.ambulance=data;
        console.log(this.ambulance.equipments);
        this.equipmentsList=this.ambulance.equipments;
        console.log(this.equipmentsList);
        console.log(this.ambulance);
      }
     
      this.isOwnerAadhar=false;
      this.isVehicalInsurance=false;
      this.isRcBook=false;
      this.isError=false;
      this.isSpinning=false;
    });
    // error=>{
    //   this.error=error;
    //   this.isError=true;
    //   this.isSpinning=false;
    // });

  }

  viewRcBook(){
    console.log("RC is being fetched...");
    this.base64Data=this.ambulance.rCBook;
    this.rcBook='data:image/jpeg;base64,'+this.base64Data;
    this.isRcBook=true;
    this.isVehicalInsurance=false;
    this.isOwnerAadhar=false;
    console.log("RC is displayed...");
  }

  viewInsurance(){
    this.base64Data=this.ambulance.vehicalInsurance;
    this.vehicalInsurance='data:image/jpeg;base64,'+this.base64Data;
    this.isVehicalInsurance=true;
    this.isRcBook=false;
    this.isOwnerAadhar=false;
  }

  viewOwnerAadhar(){
    this.base64Data=this.ambulance.ownerAadhar;
    this.ownerAadhar='data:image/jpeg;base64,'+this.base64Data;
    this.isOwnerAadhar=true;
    this.isRcBook=false;
    this.isVehicalInsurance=false;
  }
  goBackToAmbulanceList(){
    this.router.navigate(['ambulancelist']);
  }
  public modifyAnchorElementAttributes(event: CustomEvent): void {
    const textLayer = <HTMLElement>event.target;
   
    const annotationLayer = textLayer.nextElementSibling;
    const anchorElements = annotationLayer.getElementsByTagName('pdf-viewer');
    
    for (let i = 0; i < anchorElements.length; i++) {
      anchorElements[i].setAttribute('target', '_blank');
    }
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
}
