import { AbstractControl, ValidationErrors } from '@angular/forms';

 /**
  * It allow only characters
  */
 export function Validatecharacters(control: AbstractControl): ValidationErrors {
    if (!/^[^-\s][a-zA-Z]+$/.test(control.value)) {
        return { invalidcharacters: true };
    }
    return null;
}


/**
 * It checks the control value of form name is valid or not.
 */
export function validateFile(control: AbstractControl): ValidationErrors {
    if (control.value === '') {
        return { requiredfile: true };
    }
    const fileExt: string = control.value.split('.').pop(-1);

    if (fileExt.toLowerCase() !== 'pdf') {
        return { invalidfile: true };
    }
    return null;

}