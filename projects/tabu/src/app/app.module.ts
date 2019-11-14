import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabuNavComponent } from './tabu-nav/tabu-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StartComponent } from './views/start/start.component';
import { JournalComponent } from './views/journal/journal.component';
import { BalanceComponent } from './views/balance/balance.component';
import { PAndLComponent } from './views/p-and-l/p-and-l.component';
import { CoaComponent } from './views/coa/coa.component';

@NgModule({
  declarations: [
    AppComponent,
    TabuNavComponent,
    StartComponent,
    JournalComponent,
    BalanceComponent,
    PAndLComponent,
    CoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
