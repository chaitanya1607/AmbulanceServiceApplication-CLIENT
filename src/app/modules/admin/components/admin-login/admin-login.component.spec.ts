import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AdminServiceServiceStub } from '../../admin-service-service-stub';
import { AdminServiceService } from '../../admin-service.service';

import { AdminLoginComponent } from './admin-login.component';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginComponent ],
      imports: [RouterTestingModule,FormsModule,],
      providers: [{provide:AdminServiceService, useClass:AdminServiceServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*
class AdminServiceServiceStub{
  

  authenticate(userName:any,password:any){
    
   return of("admin");
   
  }

  isAdminLogin(){
    return of("admin");
  }
  
  logOut(){
 
  }

  errorHandler(error:HttpErrorResponse){
    return throwError("Invalid Credentials");
  }
}
*/