import { HttpErrorResponse } from "@angular/common/http";
import { of, throwError } from "rxjs";

export class DriverAuthenticationServiceStub {

    
  authenticate(user:any,passWd:any){
    
    return of("driver");
    
  }
  logOut(){
    
  }
   
  errorHandler(error:HttpErrorResponse){
    return throwError("Invalid Credentials");
  }
}

