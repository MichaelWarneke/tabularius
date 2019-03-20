import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellContainerComponent } from './app-shell-container/app-shell-container.component';
import { TabuAppSidenavModule } from '@tabularius/ui';

@NgModule({
  imports: [CommonModule, TabuAppSidenavModule],
  declarations: [AppShellContainerComponent],
  exports: [AppShellContainerComponent]
})
export class AppShellModule {}
