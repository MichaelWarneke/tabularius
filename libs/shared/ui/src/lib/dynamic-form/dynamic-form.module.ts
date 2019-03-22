import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { SharedUiModule } from '../shared-ui.module';

@NgModule({
  declarations: [DynamicFormComponent, DynamicFormQuestionComponent],
  imports: [SharedUiModule],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule {}

export * from './models';
