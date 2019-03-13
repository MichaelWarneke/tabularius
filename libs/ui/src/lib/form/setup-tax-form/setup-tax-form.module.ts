import { NgModule } from '@angular/core';
import { SharedUiModule } from '@tabularius/shared/ui';
import { SetupTaxFormComponent } from './setup-tax-form.component';

@NgModule({
  declarations: [SetupTaxFormComponent],
  imports: [SharedUiModule],
  exports: [SetupTaxFormComponent]
})
export class SetupTaxFormModule {}
