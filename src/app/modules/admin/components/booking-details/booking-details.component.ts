
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ambulance } from 'src/app/modules/ambulance/model/ambulance';
import { AmbulanceService } from 'src/app/modules/ambulance/service/ambulance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  vehicleNumber:string;
  ambulance:Ambulance;
  driverList = [];
  isSpinning=true;
  constructor(private ambulanceService:AmbulanceService , private router:Router ,private activatedRoute:ActivatedRoute  ) { }

  ngOnInit(): void {
    this.isSpinning=true;
    this.reloadData();
  }

  reloadData(){
    
    
    this.vehicleNumber = this.activatedRoute.snapshot.params['vehicalNumber'];
    this.ambulanceService.getBookings(this.vehicleNumber)
    .subscribe(data => {
    this.ambulance = data;
    this.driverList = this.ambulance.drivers;
    console.log(this.driverList);
    this.isSpinning=false;
    });
    // , 
    // error => console.log(error));
    
   }

   goToBookingList(){

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['bookingList']);
    });

   // this.router.navigate(['bookingList']);
  }
  

}

