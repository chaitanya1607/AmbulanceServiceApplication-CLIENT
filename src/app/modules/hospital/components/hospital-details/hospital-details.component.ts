import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from '../../model/hospital';
import { HospitalService } from '../../service/hospital.service';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {

  id: number;
  hospital:Hospital;
  certificate:any;
  base64Data:any;
  isCertificateReady=false;
  isSpinning=true;
  error:any;
  
 
  constructor(private route: ActivatedRoute,private router: Router,private hospitalService:HospitalService) { }

  ngOnInit(): void {
    this.isSpinning=true;
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
      //   this.error=error;
      //   alert(this.error);
      // }
    );
    this.isCertificateReady=false;
  }

  viewCertificate(){
 /*   console.log("view certificate button is clicked");
    this.hospitalService.getCertificate(this.id)
    .subscribe(retrievedCertificate=>{
      this.base64Data=retrievedCertificate.picByte;
      this.certificate='data:image/jpeg;base64,'+this.base64Data;
    })

    console.log(this.certificate)
    */
  /* console.log("connecting to db...");
   this.certificate=this.hospital.registrationFile;
   this.base64Data=this.certificate;
   this.certificate='data:image/jpeg;base64,'+this.base64Data;
   console.log(this.certificate);
   console.log("retrieved from db...");

   
   console.log("pdf is displayed");*/

   console.log("viewing pdf takes time...");
   this.base64Data = this.hospital.registrationFile;
   console.log(this.base64Data);
   this.certificate = 'data:image/jpeg;base64,'+this.base64Data;
   this.isCertificateReady=true;
   console.log("pdf is rendered");
  }

  
  back(){
    this.router.navigate(['hospital']);
    }
    closeCertificate(){
      this.isCertificateReady=false;
    }

}
