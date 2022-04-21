import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../../model/driver';

import { Router } from '@angular/router';
import { DriverService } from '../../services/driver.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  driverId:number;
  drivers:Observable<Driver[]>;
  isSpinning=true;
  constructor(
    private driverService:DriverService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.driverId=0;
    this.isSpinning=true;
    // this.driverService.getDriversList().subscribe();
    // this.driverService.getDriversList().subscribe();
    this.reload();
  }
  viewDriver(){
    this.router.navigate(['viewDriver',this.driverId]);
  }
  deleteDriver(){
  //   this.driverService.deleteDriver(this.driverId)
  //   .subscribe(data=>{
  //     alert(data.getFullName+" is deleted");
  //   })

  // }
  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to remove the Driver?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {

    if (result.isConfirmed) {

      console.log('Clicked Yes, File deleted!');
      this.isSpinning=true;
      this.driverService.deleteDriver(this.driverId).subscribe(data=>{
           Swal.fire('Deleted!','Driver Removed from the Company','success');
           this.router.navigateByUrl('driver',{skipLocationChange:true}).then(()=>{
               this.router.navigate(['driver']);
          });
          this.isSpinning=false;
        });
      } else if (result.isDismissed) {
      
      console.log('Clicked No, File is safe!');

    }
})
}
  reload(){
    this.driverService.getDriversList().subscribe(data=>{
      this.drivers=data;
      this.isSpinning=false;
    });
    //this.router.navigate(['driver']);
  }
  updateDriver(){
    this.router.navigate(['updateDriver',this.driverId]);
  }
  changeDriverId(value:any){
    this.driverId=value;
  }
  disabled():boolean{
    return (this.driverId===0);
  }
 goBack(){
   this.router.navigate(['home']);
 }
}
