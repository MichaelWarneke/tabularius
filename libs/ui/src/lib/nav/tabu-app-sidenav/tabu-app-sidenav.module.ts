import { NgModule } from '@angular/core';
import { TabuAppSidenavComponent } from './tabu-app-sidenav.component';
import { SharedUiModule } from '@tabularius/shared/ui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TabuAppSidenavComponent],
  imports: [SharedUiModule, RouterModule],
  exports: [TabuAppSidenavComponent]
})
export class TabuAppSidenavModule {}
