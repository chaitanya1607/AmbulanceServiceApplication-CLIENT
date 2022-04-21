import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {

  constructor(private router:Router,private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.logOut();
    Swal.fire('Logged Out!!','You are successfully loggedOut!','success');
    this.router.navigate(['']);
  }

}
