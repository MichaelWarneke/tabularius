import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabuAppSidenavComponent } from './tabu-app-sidenav.component';
import { MaterialModule } from '@tabularius/shared-libs';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TabuAppSidenavComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [TabuAppSidenavComponent]
})
export class TabuAppSidenavModule {}
