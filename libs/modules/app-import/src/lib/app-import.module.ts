import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppImportContainerComponent } from './app-import-container/app-import-container.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppImportContainerComponent }
    ])
  ],
  declarations: [AppImportContainerComponent]
})
export class AppImportModule {}
