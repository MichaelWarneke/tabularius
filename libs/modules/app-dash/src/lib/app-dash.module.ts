import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppDashContainerComponent } from './app-dash-container/app-dash-container.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppDashContainerComponent }
    ])
  ],
  declarations: [AppDashContainerComponent],
  entryComponents: []
})
export class AppDashModule {}
