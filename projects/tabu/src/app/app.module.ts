import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabuNavComponent } from './tabu-nav/tabu-nav.component';
import { MaterialModule } from '@tabu-lib/core';
import { TabuStoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    TabuNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    TabuStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
