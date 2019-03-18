import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppAccountContainerComponent } from './app-account-container/app-account-container.component';
import { AccountUserModule } from '@tabularius/ui';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppAccountContainerComponent }
    ]),
    AccountUserModule
  ],
  declarations: [AppAccountContainerComponent]
})
export class AppAccountModule {}
