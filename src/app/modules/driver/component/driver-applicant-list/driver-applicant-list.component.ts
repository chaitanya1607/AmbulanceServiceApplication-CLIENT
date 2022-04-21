import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Driver } from '../../model/driver';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-applicant-list',
  templateUrl: './driver-applicant-list.component.html',
  styleUrls: ['./driver-applicant-list.component.css']
})
export class DriverApplicantListComponent implements OnInit {
  driverId:number;
  applicants:Observable<Driver[]>;
  isSpinning=true;
  
  constructor(
    private driverService:DriverService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.driverId=0;
    this.isSpinning=true;
   this.reload();    
  }
  
  viewApplicantDetails(){
    console.log(this.driverId);
      this.router.navigate(['viewApplicantDriver',this.driverId]);
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

  reload(){
    this.driverService.getDriverApplicantList()
    .subscribe(data=>{
      this.applicants = data;
      this.isSpinning=false;
    });
  }
  
}
