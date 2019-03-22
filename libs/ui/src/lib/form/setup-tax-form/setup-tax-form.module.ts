import { NgModule } from '@angular/core';
import { SharedUiModule, DynamicFormModule } from '@tabularius/shared/ui';
import { SetupTaxFormComponent } from './setup-tax-form.component';

@NgModule({
  declarations: [SetupTaxFormComponent],
  imports: [SharedUiModule, DynamicFormModule],
  exports: [SetupTaxFormComponent]
})
export class SetupTaxFormModule {}
