import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppSetupContainerComponent } from './app-setup-container/app-setup-container.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppSetupContainerComponent }
    ])
  ],
  declarations: [AppSetupContainerComponent]
})
export class AppSetupModule {}
