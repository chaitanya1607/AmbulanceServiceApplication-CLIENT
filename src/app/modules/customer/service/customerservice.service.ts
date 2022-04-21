import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
//  private url = 'http://localhost:8080';
private url = 'https://jyoti-ambulanceservice-sep-2020-api-dev.azurewebsites.net';
  constructor(private http: HttpClient) { }

  getAllCustomerList(): Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    
    return this.http.get(`${this.url}`+"/customers",{headers});
  }



  // to get the customer details as well as to get the hospital allocated to him/her on the backend

  getCustomerById(customerId:number): Observable<any>{
    // security as per the driver login
    // const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    return this.http.get(`${this.url}`+"/customers"+`/${customerId}`);
  }
 

}
