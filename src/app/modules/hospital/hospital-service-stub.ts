import { of } from "rxjs";

export class HospitalServiceStub {

getHospitalsList(){
 
  return of([
    {
        "hospitalId": 2,
        "hospitalName": "TN Govt Hospital",
        "phoneNumber": "0442566600",
        "address": "chennai, Tamil nadu",
        "speciality": "superSpeciality",
        "bill": 0.0,
        "latitude": 13.069087,
        "longitude": 80.273783,
        "registrationFile": "12344556gfds4545asd",
        "registrationFileType": "application/pdf"
    },
    {
        "hospitalId": 54,
        "hospitalName": "Raghavan M",
        "phoneNumber": "0489723234",
        "address": "trichy,chennai",
        "speciality": "superSpeciality",
        "bill": 0.0,
        "latitude": 13.069087,
        "longitude": 80.273783,
        "registrationFile": "12344556gfds4545asd",
        "registrationFileType": "application/pdf"
    }
]);
}

getHospital(id:number){
  return of({
    "hospitalId": 2,
    "hospitalName": "TN Govt Hospital",
    "phoneNumber": "0442566600",
    "address": "chennai, Tamil nadu",
    "speciality": "superSpeciality",
    "bill": 0.0,
    "latitude": 13.069087,
    "longitude": 80.273783,
    "registrationFile": "12344556gfds4545asd",
    "registrationFileType": "application/pdf"
});
}

addHospital(hospital: FormData){
  return of("Hospital is added Successfully");
}

updateHospital(id:number,value:any){
 
  return of("Hospital details Updated successfully");
}

removeHospital(id:number){
 
  return of("Hospital Deleted Successfully");
}



}
