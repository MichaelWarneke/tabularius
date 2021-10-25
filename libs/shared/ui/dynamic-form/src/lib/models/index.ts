import {
  FormControl,
  ValidatorFn,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormArray
} from '@angular/forms';

export class FormControlBase extends FormControl {
  controlType = '';
  key = '';
  label = '';
  maxWidth = 100;
  constructor(
    formState?: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }
}

export class FormControlTextbox extends FormControlBase {
  controlType = 'input';
  type = '';
  constructor(
    formState?: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }
}

export class FormControlDate extends FormControlBase {
  controlType = 'datepicker';
  type = '';
  constructor(
    formState?: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }
}

export class FormControlCheckbox extends FormControlBase {
  controlType = 'checkbox';
  type = '';
  constructor(
    formState?: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }
}

export class FormControlSelect extends FormControlBase {
  controlType = 'select';
  type = '';
  options?: string[];
  constructor(
    formState?: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }
}

export class FormControlRadioButton extends FormControlBase {
  controlType = 'radio-button';
  type = '';
  options?: string[];
  constructor(
    formState?: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }
}
export class FormControlArray extends FormArray {
  controlType = 'array';
  key = '';
  label = '';
  type = '';
  options?: string[];
  constructor(
    formState?: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }
}
export { Validators } from '@angular/forms';
