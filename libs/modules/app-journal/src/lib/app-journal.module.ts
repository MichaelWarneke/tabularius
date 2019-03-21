import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DynamicFormModule } from '@tabularius/ui';
import { AppJournalContainerComponent } from './app-journal-container/app-journal-container.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppJournalContainerComponent }
    ])
  ],
  declarations: [AppJournalContainerComponent]
})
export class AppJournalModule {}
