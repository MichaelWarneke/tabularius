import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSetupContainerComponent } from './app-setup-container/app-setup-container.component';

import { SetupTaxFormModule } from '@tabularius/ui';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SetupTaxFormModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppSetupContainerComponent }
    ])
  ],
  declarations: [AppSetupContainerComponent]
})
export class AppSetupModule {}
