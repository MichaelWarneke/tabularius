import { NgModule } from '@angular/core';
import { AccountMenuComponent } from './account-menu.component';
import { SharedModule } from '@tabularius/shared/ui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccountMenuComponent],
  imports: [SharedModule, RouterModule],
  exports: [AccountMenuComponent]
})
export class AccountMenuModule {}
