import { NgModule } from '@angular/core';
import { SharedModule } from '@tabularius/shared/ui';
import { DynamicFormDirective } from './dynamic-form.directive';
import { DynamicFormComponent } from './container/dynamic-form.component';
import {
  InputComponent,
  DatepickerComponent,
  FormButtonComponent
} from './templates';
import { SelectComponent } from './templates/select/select.component';
import { CheckboxComponent } from './templates/checkbox/checkbox.component';
import { RadioButtonComponent } from './templates/radio-button/radio-button.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    DynamicFormDirective,
    DynamicFormComponent,
    InputComponent,
    DatepickerComponent,
    FormButtonComponent,
    SelectComponent,
    CheckboxComponent,
    RadioButtonComponent
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    InputComponent,
    DatepickerComponent,
    SelectComponent,
    CheckboxComponent,
    RadioButtonComponent
  ]
})
export class DynamicFormModule {}
