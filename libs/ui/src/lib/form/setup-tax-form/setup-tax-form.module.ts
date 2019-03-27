import { NgModule } from '@angular/core';
import { SharedModule } from '@tabularius/shared/ui';
import { DynamicFormModule } from '@tabularius/shared/dynamic-form';
import { SetupTaxFormComponent } from './setup-tax-form.component';

@NgModule({
  declarations: [SetupTaxFormComponent],
  imports: [SharedModule, DynamicFormModule],
  exports: [SetupTaxFormComponent]
})
export class SetupTaxFormModule {}
