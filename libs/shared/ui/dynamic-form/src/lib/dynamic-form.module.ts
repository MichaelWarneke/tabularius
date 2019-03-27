import { NgModule } from '@angular/core';
import { SharedModule } from '@tabularius/shared/ui';
import { DynamicFormDirective } from './dynamic-form.directive';
import { DynamicFormComponent } from './container/dynamic-form.component';
import {
  InputComponent,
  DatepickerComponent,
  FormButtonComponent
} from './templates';

@NgModule({
  imports: [SharedModule],
  declarations: [
    DynamicFormDirective,
    DynamicFormComponent,
    InputComponent,
    DatepickerComponent,
    FormButtonComponent
  ],
  exports: [DynamicFormComponent],
  entryComponents: [InputComponent, DatepickerComponent]
})
export class DynamicFormModule {}
