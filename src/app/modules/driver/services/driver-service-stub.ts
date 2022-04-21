import { Driver } from './../model/driver';
import { Ambulance } from '../../ambulance/model/ambulance';
import{of} from 'rxjs';
export class DriverServiceStub{
    driverDto :Driver;
    driverList :Driver[];
    ambulance:Ambulance;

    registerDriver(driver:FormData){
        return of ("Please check your email for further details"); 
    }

    getDriversList(){
        return of (
            [
                {
                    "driverId": 1,
                    "drivingLicenceNumber": "TN09 20145678901",
                    "aadharNumber": "5182 7502 5419",
                    "address": "1733,51st lane,colonys",
                    "billAmount": 522.0,
                    "evocCourse": true,
                    "blsCourse": true,
                    "cprCourse": true,
                    "criminalRecord": true,
                    "dateOfBirth": "12-12-1990",
                    "email": "rinienoch@gmail.com",
                    "fullName": "Enoch Ribin",
                    "gender": "male",
                    "mobileNumber": "9010901090",
                    "userName": "enoch1",
                    "password": "passWord@1",
                    "paymentRecieved": true,
                    "aadhar": "akdjidysfslsakmc2214xcas",
                    "aadharFileType": "application/pdf",
                    "license": "khfdsauacksowidpoask3543mk",
                    "licenseFileType": "application/pdf",
                    "photo": null,
                    "photoFileType": null,
                    "latitude": 0.0,
                    "longitude": 0.0,
                    "confirmPassword": "passWord@1",
                    "deleted": false,
                   "logedIn": true,
                   "assigned": true,
                   "activated": true
              },
              {
                "driverId": 2,
                "drivingLicenceNumber": "TN09 20147438901",
                "aadharNumber": "5242 7502 5419",
                "address": "1733,51st lane,colonys",
                "billAmount": 522.0,
                "evocCourse": true,
                "blsCourse": true,
                "cprCourse": true,
                "criminalRecord": true,
                "dateOfBirth": "12-12-1990",
                "email": "rinienoch@gmail.com",
                "fullName": "Enoch R",
                "gender": "male",
                "mobileNumber": "9010901090",
                "userName": "enoch",
                "password": "passWord@1",
                "paymentRecieved": true,
                "aadhar": "akdjidysfslsakmc2214xcas",
                "aadharFileType": "application/pdf",
                "license": "khfdsauacksowidpoask3543mk",
                "licenseFileType": "application/pdf",
                "photo": null,
                "photoFileType": null,
                "latitude": 0.0,
                "longitude": 0.0,
                "confirmPassword": "passWord@1",
                "deleted": false,
               "logedIn": true,
               "assigned": true,
               "activated": true
          }
              ]
        );
    }

    getDriver(driverId:number){
        return of (
            {
                "driverId": 1,
                "drivingLicenceNumber": "TN09 20145678901",
                "aadharNumber": "5182 7502 5419",
                "address": "1733,51st lane,colonys",
                "billAmount": 522.0,
                "evocCourse": true,
                "blsCourse": true,
                "cprCourse": true,
                "criminalRecord": true,
                "dateOfBirth": "12-12-1990",
                "email": "rinienoch@gmail.com",
                "fullName": "Enoch Ribin",
                "gender": "male",
                "mobileNumber": "9010901090",
                "userName": "enoch1",
                "password": "passWord@1",
                "paymentRecieved": true,
                "aadhar": "akdjidysfslsakmc2214xcas",
                "aadharFileType": "application/pdf",
                "license": "khfdsauacksowidpoask3543mk",
                "licenseFileType": "application/pdf",
                "photo": null,
                "photoFileType": null,
                "latitude": 0.0,
                "longitude": 0.0,
                "confirmPassword": "passWord@1",
                "deleted": false,
               "logedIn": true,
               "assigned": true,
               "activated": true
          }
        );
    }

    getDriverByName(name:string){
        return of (
            {
                "driverId": 1,
                "drivingLicenceNumber": "TN09 20145678901",
                "aadharNumber": "5182 7502 5419",
                "address": "1733,51st lane,colonys",
                "billAmount": 522.0,
                "evocCourse": true,
                "blsCourse": true,
                "cprCourse": true,
                "criminalRecord": true,
                "dateOfBirth": "12-12-1990",
                "email": "rinienoch@gmail.com",
                "fullName": "Enoch Ribin",
                "gender": "male",
                "mobileNumber": "9010901090",
                "userName": "enoch1",
                "password": "passWord@1",
                "paymentRecieved": true,
                "aadhar": "akdjidysfslsakmc2214xcas",
                "aadharFileType": "application/pdf",
                "license": "khfdsauacksowidpoask3543mk",
                "licenseFileType": "application/pdf",
                "photo": null,
                "photoFileType": null,
                "latitude": 0.0,
                "longitude": 0.0,
                "confirmPassword": "passWord@1",
                "deleted": false,
               "logedIn": true,
               "assigned": true,
               "activated": true
          });
    }

    updateDriver(driverId:number,value:FormData){
        return of (
            {
                "driverId": 1,
                "drivingLicenceNumber": "TN09 20145678901",
                "aadharNumber": "5182 7502 5419",
                "address": "1733,51st lane,colonys",
                "billAmount": 522.0,
                "evocCourse": true,
                "blsCourse": true,
                "cprCourse": true,
                "criminalRecord": true,
                "dateOfBirth": "12-12-1990",
                "email": "rinienoch@gmail.com",
                "fullName": "Enoch Ribin",
                "gender": "male",
                "mobileNumber": "9010901090",
                "userName": "enoch1",
                "password": "passWord@1",
                "paymentRecieved": true,
                "aadhar": "akdjidysfslsakmc2214xcas",
                "aadharFileType": "application/pdf",
                "license": "khfdsauacksowidpoask3543mk",
                "licenseFileType": "application/pdf",
                "photo": null,
                "photoFileType": null,
                "latitude": 0.0,
                "longitude": 0.0,
                "confirmPassword": "passWord@1",
                "deleted": false,
               "logedIn": true,
               "assigned": true,
               "activated": true
          }
        );
    }

    deleteDriver(driverId:number){
        return of (
            {
                "driverId": 1,
                "drivingLicenceNumber": "TN09 20145678901",
                "aadharNumber": "5182 7502 5419",
                "address": "1733,51st lane,colonys",
                "billAmount": 522.0,
                "evocCourse": true,
                "blsCourse": true,
                "cprCourse": true,
                "criminalRecord": true,
                "dateOfBirth": "12-12-1990",
                "email": "rinienoch@gmail.com",
                "fullName": "Enoch Ribin",
                "gender": "male",
                "mobileNumber": "9010901090",
                "userName": "enoch1",
                "password": "passWord@1",
                "paymentRecieved": true,
                "aadhar": "akdjidysfslsakmc2214xcas",
                "aadharFileType": "application/pdf",
                "license": "khfdsauacksowidpoask3543mk",
                "licenseFileType": "application/pdf",
                "photo": null,
                "photoFileType": null,
                "latitude": 0.0,
                "longitude": 0.0,
                "confirmPassword": "passWord@1",
                "deleted": false,
               "logedIn": true,
               "assigned": true,
               "activated": true
          }
        );
    }

   getDriverApplicantList(){
       return of(
           [
        {
            "driverId": 1,
            "drivingLicenceNumber": "TN09 20145678901",
            "aadharNumber": "5182 7502 5419",
            "address": "1733,51st lane,colonys",
            "billAmount": 522.0,
            "evocCourse": true,
            "blsCourse": true,
            "cprCourse": true,
            "criminalRecord": true,
            "dateOfBirth": "12-12-1990",
            "email": "rinienoch@gmail.com",
            "fullName": "Enoch Ribin",
            "gender": "male",
            "mobileNumber": "9010901090",
            "userName": "enoch1",
            "password": "passWord@1",
            "paymentRecieved": true,
            "aadhar": "akdjidysfslsakmc2214xcas",
            "aadharFileType": "application/pdf",
            "license": "khfdsauacksowidpoask3543mk",
            "licenseFileType": "application/pdf",
            "photo": null,
            "photoFileType": null,
            "latitude": 0.0,
            "longitude": 0.0,
            "confirmPassword": "passWord@1",
            "deleted": false,
           "logedIn": true,
           "assigned": true,
           "activated": false
      },
      {
        "driverId": 2,
        "drivingLicenceNumber": "TN09 20147438901",
        "aadharNumber": "5242 7502 5419",
        "address": "1733,51st lane,colonys",
        "billAmount": 522.0,
        "evocCourse": true,
        "blsCourse": true,
        "cprCourse": true,
        "criminalRecord": true,
        "dateOfBirth": "12-12-1990",
        "email": "rinienoch@gmail.com",
        "fullName": "Enoch R",
        "gender": "male",
        "mobileNumber": "9010901090",
        "userName": "enoch",
        "password": "passWord@1",
        "paymentRecieved": true,
        "aadhar": "akdjidysfslsakmc2214xcas",
        "aadharFileType": "application/pdf",
        "license": "khfdsauacksowidpoask3543mk",
        "licenseFileType": "application/pdf",
        "photo": null,
        "photoFileType": null,
        "latitude": 0.0,
        "longitude": 0.0,
        "confirmPassword": "passWord@1",
        "deleted": false,
       "logedIn": true,
       "assigned": true,
       "activated": false
  }
      ]
       )
   }

    sendMail(driverId:number){
        return of ("Mail Sent");
    }

    rejectMail(driverId:number){
        return of ("Mail Sent");
    }

    sendRecoveryMail(email:string){
        return of ("Mail Sent");
    }

    submitAmbulance(driverId:number){
        return of ("ambulanceSubmited");
    }

    updateDriverCoordinated(){
        return of ("updatedList");
    }

    getAllottedAmbulance(driverId:number){
        return of (
            {
                "HttpStatus": "OK",
                "header": "Fetching Unassigned Ambulance",
                "Error": false,
                "message": "Ambulance fetched successfully",
                "Body": {
                    "ambulanceId": 10,
                    "vehicalNumber": "AP 03 AZ 9999",
                    "vehicalRegistrationDate": "2020-12-02T00:00:00.000+00:00",
                    "vehicalInsurance":"fosifjcmapowdsc37dsf",
                    "vehicalInsuranceFileType": "application/pdf",
                    "rCBook": "fosifjcmapowdsc37dsf",
                    "rCBookFileType": "application/pdf",
                    "drivers": [],
                   "equipments": [
                   "OXYGEN CYLINDER",
                   "STRETCHER",
                  "ECG"
                  ],
                   "insuranceValidity": "2021-12-21T00:00:00.000+00:00",
                  "ownerAadharNumber": "2345 6789 1023",
                  "ownerAadhar": "fosifjcmapowdsc37dsf",
                  "ownerAadharFileType": "application/pdf",
                  "ownerAddress": "7-7,chennai,TN",
                  "ownerName": "Enoch Ribin C",
                  "deleted": false,
                  "assigned": true
              }
          }
            
        );
    }

}