import { NgModule } from '@angular/core';
import { AccountUserComponent } from './account-user.component';
import { SharedUiModule, DynamicFormModule } from '@tabularius/shared/ui';

@NgModule({
  declarations: [AccountUserComponent],
  imports: [SharedUiModule, DynamicFormModule],
  exports: [AccountUserComponent]
})
export class AccountUserModule {}
