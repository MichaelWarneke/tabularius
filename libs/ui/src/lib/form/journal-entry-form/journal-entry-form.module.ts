import { NgModule } from '@angular/core';
import { JournalEntryFormComponent } from './journal-entry-form.component';
import { SharedUiModule } from '@tabularius/shared/ui';
import { DynamicFormModule } from '@tabularius/shared/ui';

@NgModule({
  declarations: [JournalEntryFormComponent],
  imports: [SharedUiModule, DynamicFormModule],
  exports: [JournalEntryFormComponent]
})
export class JournalEntryFormModule {}
