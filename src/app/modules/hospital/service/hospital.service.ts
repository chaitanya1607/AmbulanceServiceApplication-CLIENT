import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

// private url:string="http://localhost:8080"
private url = 'https://jyoti-ambulanceservice-sep-2020-api-dev.azurewebsites.net';


  constructor(private http:HttpClient) { }
  
  getHospitalCount():Observable<any> {
    return this.http.get(`${this.url}`+"/hospital-count");
}

  getHospitalsList(): Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    return this.http.get(`${this.url}`+"/hospitalsList",{headers});
  }

  getHospital(id:number): Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    
    return this.http.get(`${this.url}`+"/getHospital"+`/${id}`,{headers});
  }

  addHospital(hospital: FormData): Observable<Object>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    
    return this.http.post(`${this.url}`+"/addHospital", hospital,{headers,responseType:'text'});
  }

  updateHospital(id:number,value:any):Observable<Object>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    
    return this.http.put(`${this.url}/updateHospital/${id}`,value,{headers,responseType:'text'});
  }

  removeHospital(id:number):Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    
    return this.http.delete(`${this.url}/deleteHospital/${id}`,{headers,responseType:'text'});
  }

  getCertificate(id:number):Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    
    return this.http.get(`${this.url}/hospitalCert/${id}`,{headers});
  }
  
}
