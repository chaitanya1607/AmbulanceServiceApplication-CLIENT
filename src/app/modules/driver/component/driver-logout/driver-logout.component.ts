import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverAuthenticationService } from '../../services/driver-authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-driver-logout',
  templateUrl: './driver-logout.component.html',
  styleUrls: ['./driver-logout.component.css']
})
export class DriverLogoutComponent implements OnInit {

  constructor(private driverService:DriverAuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.driverService.logOut();
    Swal.fire('Logged Out!!','You are successfully loggedOut!','success');
    this.router.navigate(['']);
  }

}
