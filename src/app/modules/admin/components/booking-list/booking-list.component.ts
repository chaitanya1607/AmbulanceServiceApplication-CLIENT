import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ambulance } from 'src/app/modules/ambulance/model/ambulance';
import { AmbulanceService } from 'src/app/modules/ambulance/service/ambulance.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {


  ambulanceList : Observable<Ambulance[]>;
  isSpinning=true;
  vehicalNumber:string;
constructor(private ambulanceService:AmbulanceService , private router:Router  ){}

ngOnInit(){ 
  this.vehicalNumber="";
  this.isSpinning=true;
  this.reloadData();
}

reloadData(){

  this.ambulanceService.getAmbulanceList()
  .subscribe(resp => {
  this.ambulanceList=resp;
  if(resp['Error']==true){
    Swal.fire('Sorry!!!',resp['message'],'error');
  }
  console.log(resp);
  this.isSpinning=false;
  }); 
}

viewBookingDetails(){
  this.router.navigate(['bookingDetails',this.vehicalNumber]);
}

disabled():boolean{
  return (this.vehicalNumber=="" || this.vehicalNumber==null);
}

changeAmbulanceVehicalNumber(value:string){
  this.vehicalNumber = value;
}
goBack(){
  this.router.navigate(['home']);
}

}
