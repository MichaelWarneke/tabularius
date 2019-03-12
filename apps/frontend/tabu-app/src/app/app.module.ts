import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabuAppSidenavModule } from '@tabularius/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, TabuAppSidenavModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
