import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn:'root'
})
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{

        if(error.status===401){
          Swal.fire('Bad Credentials!!','Try logging in again','error');
          this.router.navigate(['']);
        }else if(error.status===440){
          // alert("Session expired");
          Swal.fire('Session expired!!','Try logging in again','error');
          this.router.navigate(['']);
        }else if(error.status>=500 && error.status<600){
          Swal.fire('Try Again!!','Internal Server Error','error');
          this.router.navigate(['']);
        }else if(error.status===404){
          // alert("Not Found");
          Swal.fire('Sorry!!!',error['error'],'error');
        }
        // else{
        //   alert(error.statusText + "--"+ error.status);
        // }
        
        return throwError(error);
      })
    )
  }
}
