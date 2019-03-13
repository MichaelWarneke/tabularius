import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppReportsContainerComponent } from './app-reports-container/app-reports-container.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppReportsContainerComponent }
    ])
  ],
  declarations: [AppReportsContainerComponent]
})
export class AppReportsModule {}
