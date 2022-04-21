import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminServiceService } from '../../admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
userName:string;
password:string;
errorMessage=false;
error: any;
isSpinning=false;

  constructor(private router:Router,private adminService:AdminServiceService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    //this.adminService.authenticate(this.userName,this.password)
    // .subscribe(data=>{
    //   console.log(data);
    // })
    this.isSpinning=true;
   this.adminService.authenticate(this.userName,this.password).subscribe(text=>{
     this.isSpinning=false;
    if(text==="admin")
    {
    sessionStorage.setItem('uname',this.userName);
    sessionStorage.setItem('pword',this.password);
    sessionStorage.setItem('role','admin');
    this.router.navigateByUrl('home');
    }
   }
  //  ,error=>{
  //   this.errorMessage=true;
  //   alert(this.error=error);
  //   this.router.navigate(['/login']);
  // }
   );
  }
  
}


