import { NgModule } from '@angular/core';
import { TabuAppSidenavComponent } from './tabu-app-sidenav.component';
import { SharedModule } from '@tabularius/shared/ui';
import { RouterModule } from '@angular/router';
import { AccountMenuModule } from '../account-menu';

@NgModule({
  declarations: [TabuAppSidenavComponent],
  imports: [SharedModule, RouterModule, AccountMenuModule],
  exports: [TabuAppSidenavComponent]
})
export class TabuAppSidenavModule {}
