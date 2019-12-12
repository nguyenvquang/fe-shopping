import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordDirective,
    multi: true
  }]
})
export class PasswordDirective implements Validator {

  @Input()
  appPassword: string;

  constructor() {
  }

  validate(c: AbstractControl): { [key: string]: any; } {
    const controlToCompare = c.parent.get(this.appPassword);
    // tslint:disable-next-line:triple-equals
    if (controlToCompare && controlToCompare.value == c.value) {
      return {equal: true};
    }
    return {notEqual: true};
  }

  registerOnValidatorChange?(fn: () => void): void {
  }

}
