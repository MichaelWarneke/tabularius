import { NgModule } from '@angular/core';
import { AccountUserComponent } from './account-user.component';
import { SharedModule } from '@tabularius/shared/ui';
import { DynamicFormModule } from '@tabularius/shared/dynamic-form';

@NgModule({
  declarations: [AccountUserComponent],
  imports: [SharedModule, DynamicFormModule],
  exports: [AccountUserComponent]
})
export class AccountUserModule {}
