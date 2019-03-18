import { NgModule } from '@angular/core';
import { AccountUserComponent } from './account-user.component';
import { SharedUiModule } from '@tabularius/shared/ui';

@NgModule({
  declarations: [AccountUserComponent],
  imports: [SharedUiModule],
  exports: [AccountUserComponent]
})
export class AccountUserModule {}
