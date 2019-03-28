import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({ selector: 'tabu-dynamic-form-checkbox', template: '' })
export class CheckboxStubComponent {}

@Component({ selector: 'tabu-dynamic-form-datepicker', template: '' })
export class DatepickerStubComponent {}

@Component({ selector: 'tabu-dynamic-form-button', template: '' })
export class FormButtonStubComponent {
  @Input() text: string | null = null;
  @Input() group: FormGroup | null = null;
  @Input() color: string | null = null;
  @Output() onClicked = new EventEmitter<any>();
}

@Component({ selector: 'tabu-dynamic-form-group', template: '' })
export class GroupStubComponent {
  @Input() form: FormGroup = new FormGroup({});
}

@Component({ selector: 'tabu-dynamic-form-input', template: '' })
export class InputStubComponent {}

@Component({ selector: 'tabu-dynamic-form-radio-button', template: '' })
export class RadioButtonStubComponent {}

@Component({ selector: 'tabu-dynamic-form-select', template: '' })
export class SelectStubComponent {}
