import { NgModule } from '@angular/core';
import { JournalEntryFormComponent } from './journal-entry-form.component';
import { SharedUiModule } from '@tabularius/shared/ui';

@NgModule({
  declarations: [JournalEntryFormComponent],
  imports: [
    SharedUiModule
  ],
  exports:[JournalEntryFormComponent] 
})
export class JournalEntryFormModule { }
