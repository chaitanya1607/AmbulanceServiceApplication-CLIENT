import { Hospital } from "../../hospital/model/hospital";

export class Customer {

    customerId:number;
    name:string;
    landmark:string;
    latitude:number;
    longitude:number;
    distance:number;
    billAmount:number;
    serviceDate:Date;
    modeOfPayment:string;
    mobileNumber:string;
    nearByHospital: Hospital;
}
