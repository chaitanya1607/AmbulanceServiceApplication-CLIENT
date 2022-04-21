import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverMapService {

  url ='https://router.hereapi.com/v8/routes?transportMode=car&return=polyline,summary';
  apiKey = '&apiKey=JSf2Z2IvdoUGVNbk4R1ABFsZ6n9gtmCOjM-OfLwgX1s';

  constructor(private http:HttpClient) { }

  getDistanceAndTime(sourceLatitude:any,sourceLongitude:any,destinationLatitude:any,destinationLongitude:any): Observable<any>{
    
    console.log(sourceLatitude);
    console.log(sourceLongitude);
    console.log(destinationLatitude);
    console.log(destinationLongitude);
    return this.http.get(this.url+"&origin="+sourceLatitude+","+sourceLongitude+"&destination="+destinationLatitude+","+destinationLongitude+this.apiKey);
  }
}
