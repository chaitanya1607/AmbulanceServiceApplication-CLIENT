import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[appMobileNumberValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting:MobileNumberValidatorDirective,
    multi: true
  }]

})
export class MobileNumberValidatorDirective implements Validators{
  validate(control:AbstractControl):{[key :string] : any }|null{
    if(control.value && control.value.length !=10){
      return {'mobileNumberInvalid':true};
    }
    return null;
  }
  constructor() { }

}
