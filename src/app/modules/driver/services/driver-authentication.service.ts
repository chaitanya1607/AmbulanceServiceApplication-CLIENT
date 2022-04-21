import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriverAuthenticationService {


private baseUrl='https://jyoti-ambulanceservice-sep-2020-api-dev.azurewebsites.net/secure/driver';
//  public baseUrl:string="http://localhost:8080/secure/driver";
  


  constructor(private http:HttpClient) { }

  authenticate(user:any,passWd:any):Observable<any>{
    const headers=new HttpHeaders({Authorization:'Basic '+btoa(user+':'+passWd)});
    return this.http.get(`${this.baseUrl}`,{headers,responseType:"text"}).pipe(catchError(this.errorHandler));
    
  }

  isDriverLogin(){
    let role=sessionStorage.getItem('role');
    console.log(!(role===null));
    if(role==='driver'){
      console.log(role);
      return role;
    }
    
  }

  logOut(){
    sessionStorage.removeItem('uname');
  }
   
  errorHandler(error:HttpErrorResponse){
    return throwError("Invalid Credentials");
  }
}
