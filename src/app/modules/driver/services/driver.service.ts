import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DriverService {

 
//  private url = 'http://localhost:8080';
private url = 'https://jyoti-ambulanceservice-sep-2020-api-dev.azurewebsites.net';


  constructor(private http: HttpClient) { }
  registerDriver(driver: FormData):Observable<any> {
    return this.http.post(`${this.url}`+"/add-driver",driver);
  }

  getDriversCount(): Observable<any>{
    return this.http.get(`${this.url}`+"/driver-count");
   }

  getDriversList(): Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    
    return this.http.get(`${this.url}`+"/drivers",{headers});
  }
  getDriver(driverId:number):Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    return this.http.get(`${this.url}/get-driver/${driverId}`,{headers});
  }

  getDriverDetails(driverId:number):Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    return this.http.get(`${this.url}/get-driver-details/${driverId}`,{headers});
  }

 getDriverByName(name:string):Observable<any>{
   console.log(name+"hello");
  return this.http.get(`${this.url}/get-driver-by-name/${name}`);
}

  updateDriver(driverId:number,value:FormData):Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    return this.http.put(`${this.url}/update-driver/${driverId}`,value,{headers});
  }
  deleteDriver(driverId:number):Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    
    return this.http.delete(`${this.url}/delete-driver/${driverId}`,{headers});
  }
  
  getDriverApplicantList():Observable<any>{
    const headers= new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem('uname')+':'+sessionStorage.getItem('pword'))});
    return this.http.get(`${this.url}`+"/applicants-list",{headers});
  }
  getApplicantsList():Observable<any>{
    return this.http.get(`${this.url}`+"/applicants");
  }
  sendMail(driverId:number):Observable<any>{
    return this.http.get(`${this.url}/accept/${driverId}`,{responseType:'text'});
  }

  submitAmbulance(driverId:number):Observable<any>{
    return this.http.get(`${this.url}/submitAmbulance/${driverId}`);
   }

  rejectMail(driverId:number):Observable<any>{
    return this.http.get(`${this.url}/reject/${driverId}`,{responseType:'text'});
  }


  updateDriverCoordinates(latitude: number, longitude: number, driverId: number):Observable<any> {
    return this.http.put(`${this.url}/updateDriveCoords/${driverId}`,{latitude,longitude});
  }

  sendRecoveryMail(email:string):Observable<any>{
    return this.http.get(`${this.url}/recovery-mail/${email}`);
  }

  getAllottedAmbulance(driverId:number):Observable<any>{
    return this.http.get(`${this.url}/allotAmbulance/${driverId}`);
  }

}