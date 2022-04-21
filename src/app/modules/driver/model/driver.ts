import { Customer } from '../../customer/model/customer';

export class Driver {
    fullName:string;
    photo:any;
    email:string;
    mobileNumber:string;
    drivingLicenceNumber:string;
    aadhar:any;
    license:any;
    cprCourse:boolean;
    blsCourse:boolean;
    driverId:number;
    address:string;
    aadharNumber:number;
    criminalRecord:boolean;
    billAmount:number;
    evocCourse:boolean;
    dateOfBirth:Date;
    gender:string;
    isActivated:boolean;
    password:string;
    paymentReceived:boolean;
    userName:string;
    customers:Customer[];
    latitude: number;
    longitude: number;
}
