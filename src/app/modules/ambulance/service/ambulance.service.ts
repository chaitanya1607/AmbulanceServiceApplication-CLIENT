import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { Ambulance } from '../model/ambulance';
import {catchError} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AmbulanceService {

// private baseUrl:string="http://localhost:8080";
private baseUrl='https://jyoti-ambulanceservice-sep-2020-api-dev.azurewebsites.net';
  constructor(private http:HttpClient) { }

  
  getAmbulanceList(): Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    return this.http.get(`${this.baseUrl}`+"/ambulances",{headers}).pipe(catchError(this.errorHandler));
    
  }
  createAmbulance(ambulance:FormData):Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    return this.http.post(`${this.baseUrl}`+"/ambulance",ambulance,{headers,responseType:'text'}).pipe(catchError(this.errorHandler));
  }


  getAmbulanceByVehicleNumber(vehicalNumber : String) : Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    
    return this.http.get(`${this.baseUrl}/ambulances/${vehicalNumber}`,{headers}).pipe(catchError(this.errorHandler));

  }

  getBookings(number : String) : Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    
    return this.http.get(`${this.baseUrl}/bookings/${number}`,{headers}).pipe(catchError(this.errorHandler));
  }
  updateAmbulance(vehicalNumber:String,ambulance:FormData):Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    
    return this.http.put(`${this.baseUrl}/ambulances/${vehicalNumber}`,ambulance,{headers,responseType:'text'}).pipe(catchError(this.errorHandler));

  }
  deleteAmbulance(vehicalNumber:String):Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    return this.http.delete(`${this.baseUrl}/ambulances/${vehicalNumber}`,{headers,responseType:'text'}).pipe(catchError(this.errorHandler));
  }

  ambulances() :Observable<any>{
    return this.http.get(`${this.baseUrl}/ambulance-count`)
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
  
}
