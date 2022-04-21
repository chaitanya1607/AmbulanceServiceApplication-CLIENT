import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-register-msg',
  templateUrl: './driver-register-msg.component.html',
  styleUrls: ['./driver-register-msg.component.css']
})
export class DriverRegisterMsgComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginPage(){
    this.router.navigate(['']);
  }

}
