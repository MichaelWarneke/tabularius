import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSetupContainerComponent } from './app-setup-container/app-setup-container.component';

import { SharedUiModule } from '@tabularius/shared/ui';
import { SetupTaxFormModule } from '@tabularius/ui';

@NgModule({
  imports: [
    SharedUiModule,
    SetupTaxFormModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppSetupContainerComponent }
    ])
  ],
  declarations: [AppSetupContainerComponent]
})
export class AppSetupModule {}
