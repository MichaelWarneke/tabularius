import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppJournalContainerComponent } from './app-journal-container/app-journal-container.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppJournalContainerComponent }
    ])
  ],
  declarations: [AppJournalContainerComponent]
})
export class AppJournalModule {}
