import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  
 private baseUrl='https://jyoti-ambulanceservice-sep-2020-api-dev.azurewebsites.net/secure/admin';
  // public baseUrl:string="http://localhost:8080/secure/admin";

  constructor(private http:HttpClient) { }

  authenticate(userName:any,password:any):Observable<any>{
    const headers=new HttpHeaders({Authorization:'Basic '+btoa(userName+':'+password)});
   return this.http.get(`${this.baseUrl}`,{headers,responseType:"text"}).pipe(catchError(this.errorHandler));
   
  }

  isAdminLogin(){
    let user=sessionStorage.getItem('uname');
    console.log(!(user===null));
    if(user==='admin'){
      console.log(user);
      return user;
    }
    //return !(user===null);
  }
  
  logOut(){
  sessionStorage.removeItem('uname');
  }

  errorHandler(error:HttpErrorResponse){
    return throwError("Invalid Credentials");
  }
}
