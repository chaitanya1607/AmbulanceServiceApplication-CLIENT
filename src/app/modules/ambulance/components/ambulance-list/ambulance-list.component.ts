import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ambulance } from '../../model/ambulance';
import { AmbulanceService } from '../../service/ambulance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ambulance-list',
  templateUrl: './ambulance-list.component.html',
  styleUrls: ['./ambulance-list.component.css']
})
export class AmbulanceListComponent implements OnInit {
  vehicalNumber:String;

  error:any;
  isError=false;
  ambulances:Observable<Ambulance[]>;
  isSpinning=true;
  constructor(private ambulanceService:AmbulanceService,private router:Router) { }

  ngOnInit(): void {
    this.vehicalNumber=null;
    this.isSpinning=true;
    this.reloadData();
    this.isError=false;
   
  }

  reloadData(){
    this.ambulanceService.getAmbulanceList().subscribe(data=>{
        this.ambulances=data;
        this.isSpinning=false;
      }
    );
  }
  updateAmbulance(){
    this.router.navigate(['updateAmbulance',this.vehicalNumber]);
  }

  
  deleteAmbulance(){
    // if(confirm("Do you want to delete the ambulance")){
    //   this.isSpinning=true;
    // this.ambulanceService.deleteAmbulance(this.vehicalNumber).subscribe(data=>{
    //   if(data['Error']==true){
    //     alert(data['message']);
    //   }else{
    //     alert(data['message']);
    //   }
    //   console.log(data);
    //   this.isSpinning=false;
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to delete the ambulance?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
  
        if (result.isConfirmed) {
  
          console.log('Clicked Yes, File deleted!');
          this.isSpinning=true;
          this.ambulanceService.deleteAmbulance(this.vehicalNumber).subscribe(data=>{
              if(data['Error']==true){
      Swal.fire('Sorry!!!',data['message'],'error');
      
    }else{
      Swal.fire('Deleted!',data,'success');
      this.router.navigateByUrl('ambulancelist',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['ambulancelist']);
      });
        }
              console.log(data);
              this.isSpinning=false;
            });
          } else if (result.isDismissed) {
          
          console.log('Clicked No, File is safe!');
  
        }
    })
   
  }
  viewAmbulance(){
    this.router.navigate(['viewAmbulance',this.vehicalNumber]);

  }
  addAmbulance()
  {
    this.router.navigate(['addNewAmbulance']);
  }
  goBack(){
    this.router.navigate(['home']);
  }
  disabled():boolean{
    return (this.vehicalNumber===null);
  }
  changeAmbulanceNumber(value:any){
    this.vehicalNumber=value;
  }
}
