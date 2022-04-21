import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hospital } from '../../model/hospital';

import { HospitalService } from '../../service/hospital.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-hospitals-list',
  templateUrl: './hospitals-list.component.html',
  styleUrls: ['./hospitals-list.component.css']
})
export class HospitalsListComponent implements OnInit {
  hospitalId:number;

 // hospitals : Observable<Hospital[]>;
 hospitals : Observable<Hospital[]>
  error:any;
  isSpinning=true;
  constructor( private hospitalService:HospitalService, private router:Router) { }

  ngOnInit(): void {
    this.hospitalId=0;
    this.isSpinning=true;
  //  this.hospitalService.getHospitalsList().subscribe();
    this.reloadData();
  }
  
  reloadData() {
    console.log("in hospital list component");
    this.hospitalService.getHospitalsList()
    .subscribe(data=>{
      this.hospitals=data;
      console.log(this.hospitals);
      this.isSpinning=false;
    }
    // ,
    // error=>{
    //   alert(this.error=error);
    // }
    );
    }
  
  hospitalDetails(){
    this.router.navigate(['hospitalDetails', this.hospitalId]);
    }

    updateHospital(){
      this.router.navigate(['updateHospitalForm',this.hospitalId]);
    }

    deleteHospital(){
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to delete the Hospital?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          this.isSpinning= true;
        this.hospitalService.removeHospital(this.hospitalId)
        .subscribe(
          data=>{
            Swal.fire('Deleted!','Hospital Removed from the company','success');
            this.isSpinning=false;
          //  this.reloadData();
          this.router.navigateByUrl('hospital',{skipLocationChange:true}).then(()=>{
              this.router.navigate(['hospital']);
          });
          
          })
        }
          
  })
  
}
      addHospital(){
        this.router.navigate(['addHospitalForm']);
      }

      backToHome(){
        this.router.navigate(['home']);
      }
      changeHospitalId(value:any){
        console.log(value);
        this.hospitalId=value;
      }
      disabled():boolean{
        return (this.hospitalId===0);
      }

}
