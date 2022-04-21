import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../../services/driver.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recovery-mail',
  templateUrl: './recovery-mail.component.html',
  styleUrls: ['./recovery-mail.component.css']
})
export class RecoveryMailComponent implements OnInit {
  gmail:string;
  constructor(
    private driverService:DriverService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  sendMail(){
    console.log(this.gmail);
    const email = this.gmail;
    this.driverService.sendRecoveryMail(email).subscribe(data=>{
      if(data['success']===false){
      Swal.fire('Wrong Email address!!','Email Address Not Found','error');
    }else{
      Swal.fire('Email Sent!!','Credentials has been sent to your Email ID','success');
      this.router.navigate(['Driver/dLogin']);
      }
    })

  }
}
