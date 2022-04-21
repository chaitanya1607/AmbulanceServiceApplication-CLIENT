import { HttpErrorResponse } from "@angular/common/http";
import { of, throwError } from "rxjs";

export class AdminServiceServiceStub {
    authenticate(userName:any,password:any){
    
        return of("admin");
        
       }
     
       isAdminLogin(){
         return of("admin");
       }
       
       logOut(){
      
       }
     
       errorHandler(error:HttpErrorResponse){
         return throwError("Invalid Credentials");
       }
}
