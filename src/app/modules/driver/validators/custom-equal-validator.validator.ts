// import { Validator, NG_VALIDATORS, AbstractControl, FormGroup } from '@angular/forms';
// import { Directive, Input } from '@angular/core';

import { FormGroup } from "@angular/forms";

// @Directive({
//     selector:'[appConfirmEqualValidator]',
//     providers:[{
//         provide: NG_VALIDATORS,
//         useExisting:ConfirmEqualValidatorDirective,
//         multi:true
//     }]


// })
// export class ConfirmEqualValidatorDirective implements Validator{
//     @Input() appConfirmEqualValidator:string;
//     validate(control: AbstractControl):{[key:string]:any} | null{
//         const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
//         if(controlToCompare && controlToCompare.value !== control.value){
//             return {'notEqual':true}
//         }
//         return null;
//     }

// }

export function CustomEqualValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}