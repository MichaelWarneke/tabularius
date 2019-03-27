import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatInputModule,
  MatDatepickerModule,
  MatCardModule,
  MatTableModule,
  MatCheckboxModule,
  MatSelectModule,
  MatProgressBarModule,
  MatMenuModule,
  MatRadioModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressBarModule,
    MatMenuModule,
    MatRadioModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressBarModule,
    MatMenuModule,
    MatRadioModule
  ],
  providers: [MatDatepickerModule]
})
export class MaterialModule {}
