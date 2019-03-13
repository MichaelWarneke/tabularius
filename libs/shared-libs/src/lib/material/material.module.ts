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
  MatSelectModule
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
    MatSelectModule
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
    MatSelectModule
  ],
  providers: [MatDatepickerModule]
})
export class MaterialModule {}
