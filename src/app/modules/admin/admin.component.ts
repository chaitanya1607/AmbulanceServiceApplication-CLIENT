import { Component, OnInit } from '@angular/core';
import { AmbulanceService } from '../ambulance/service/ambulance.service';
import { DriverService } from '../driver/services/driver.service';
import { HospitalService } from '../hospital/service/hospital.service';
import { AdminServiceService } from './admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title = 'Ambulance-application';
  isAdminLogin:string;
  isAdmin=false;
  driversList=[];
  driverApplicantsList=[];
  hospitalList=[];
  ambulanceList=[];
  totalNumberOfDrivers:number;
  totalNumberOfDriverApplicants:number;
  totalNumberOfHospitals:number;
  totalNumberOfAmbulances:number;

  driverCount: any;

  constructor(private adminService:AdminServiceService,
    private driverService:DriverService,
    private hospitalService:HospitalService,
    private ambulanceService:AmbulanceService) { }
  
  ngOnInit(): void {
    this.isAdminLogin=this.adminService.isAdminLogin();
    if(this.isAdminLogin==='admin'){
      this.isAdmin=true;
    } 
    this.getAllAmbulanceList();
    this.getAllDriversList();
    this.getAllDriverApplicantList();
    this.getAllHospitalList();
   
   
  }
  getAllDriversList(){
    /*
    this.driverService.getDriversList().subscribe(data=>{
      this.driversList=data;
      console.log(data)
      this.totalNumberOfDrivers=this.calculateTheListSize(this.driversList);
    });
    */

    this.driverService.getDriversCount().subscribe(
      data =>{
        this.driverCount=data;
      }
    )
   
  }
  getAllDriverApplicantList(){
    this.driverService.getApplicantsList()
    .subscribe(data=>{
      this.totalNumberOfDriverApplicants=data;
    });
  }
  getAllHospitalList(){
    this.hospitalService.getHospitalCount()
    .subscribe(data=>{
      this.totalNumberOfHospitals=data;
    });
  
    
   
  }
  getAllAmbulanceList(){
    this.ambulanceService.ambulances().subscribe(data=>{
      this.totalNumberOfAmbulances=data;
    });
   
  }
  calculateTheListSize(list:any[]):number{
    console.log(list);
    var size:number;
   size=list.length;
    return size;
  }
}
