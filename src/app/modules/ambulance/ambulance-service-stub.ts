import { HttpErrorResponse } from "@angular/common/http"
import { of, throwError } from "rxjs"

export class AmbulanceServiceStub {


getAmbulanceList(){
  
  return of([
      {
    "ambulanceId": 10,
    "vehicalNumber": "AP 03 AZ 9999",
    "vehicalRegistrationDate": "2020-12-02T00:00:00.000+00:00",
    "vehicalInsurance": "12344556gfds4545asd",
    "vehicalInsuranceFileType": "application/pdf",
    "rCBook": "12344556gfds4545asd",
    "rCBookFileType": "application/pdf",
    "drivers": [],
    "equipments": [
        "OXYGEN CYLINDER",
        "STRETCHER"
    ],
    "insuranceValidity": "2021-12-21T00:00:00.000+00:00",
    "ownerAadharNumber": "2345 6789 1023",
    "ownerAadhar": "12344556gfds4545asd",
    "ownerAadharFileType": "application/pdf",
    "ownerAddress": "7-7,chennai,TN",
    "ownerName": "Enoch Ribin C",
    "deleted": false,
    "assigned": true
},
{
  "ambulanceId": 11,
  "vehicalNumber": "AP 03 AZ 7799",
  "vehicalRegistrationDate": "2020-12-02T00:00:00.000+00:00",
  "vehicalInsurance": "12344556gfds4545asd",
  "vehicalInsuranceFileType": "application/pdf",
  "rCBook": "12344556gfds4545asd",
  "rCBookFileType": "application/pdf",
  "drivers": [],
  "equipments": [
      "OXYGEN CYLINDER",
      "STRETCHER",
      "ECG"
  ],
  "insuranceValidity": "2021-12-21T00:00:00.000+00:00",
  "ownerAadharNumber": "2345 6789 1023",
  "ownerAadhar": "12344556gfds4545asd",
  "ownerAadharFileType": "application/pdf",
  "ownerAddress": "7-7,chennai,TN",
  "ownerName": "Lavanya S",
  "deleted": false,
  "assigned": true
}]);
  
}
createAmbulance(ambulance:FormData){
  
  return of("Ambulance saved into database");
}


getAmbulanceByVehicleNumber(number : String) {
  
  return of(
    {
      "ambulanceId": 10,
      "vehicalNumber": "AP 03 AZ 9999",
      "vehicalRegistrationDate": "2020-12-02T00:00:00.000+00:00",
      "vehicalInsurance": "12344556gfds4545asd",
      "vehicalInsuranceFileType": "application/pdf",
      "rCBook": "12344556gfds4545asd",
      "rCBookFileType": "application/pdf",
      "drivers": [],
      "equipments": [
          "OXYGEN CYLINDER",
          "STRETCHER"
      ],
      "insuranceValidity": "2021-12-21T00:00:00.000+00:00",
      "ownerAadharNumber": "2345 6789 1023",
      "ownerAadhar": "12344556gfds4545asd",
      "ownerAadharFileType": "application/pdf",
      "ownerAddress": "7-7,chennai,TN",
      "ownerName": "Enoch Ribin C",
      "deleted": false,
      "assigned": true
  }
);

}
updateAmbulance(vehicalNumber:String,ambulance:FormData){
  
  return of("Ambulance details Updated successfully");

}
deleteAmbulance(vehicalNumber:String){
 
  return of("Ambulance Deleted successfully");
}

errorHandler(error:HttpErrorResponse){
  return throwError(error.message || "Server Error");
}

}
