import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppAccountContainerComponent } from './app-account-container/app-account-container.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppAccountContainerComponent }
    ])
  ],
  declarations: [AppAccountContainerComponent]
})
export class AppAccountModule {}
