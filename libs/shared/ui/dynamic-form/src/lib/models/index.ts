import {
  FormControl,
  ValidatorFn,
  AbstractControlOptions,
  AsyncValidatorFn
} from '@angular/forms';

export class FormControlBase extends FormControl {
  controlType = '';
  key = '';
  label = '';
}

export class FormControlTextbox extends FormControlBase {
  controlType = 'input';
  type = '';
}

export class FormControlDate extends FormControlBase {
  controlType = 'datepicker';
  type = '';
}

export class FormControlCheckbox extends FormControlBase {
  controlType = 'checkbox';
  type = '';
}

export class FormControlSelect extends FormControlBase {
  controlType = 'select';
  type = '';
  options?: string[];
}

export class FormControlRadioButton extends FormControlBase {
  controlType = 'radio-button';
  type = '';
  options?: string[];
}

export { Validators } from '@angular/forms';
