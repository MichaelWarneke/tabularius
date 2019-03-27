import { NgModule } from '@angular/core';
import { JournalEntryFormComponent } from './journal-entry-form.component';
import { SharedModule } from '@tabularius/shared/ui';
import { DynamicFormModule } from '@tabularius/shared/dynamic-form';

@NgModule({
  declarations: [JournalEntryFormComponent],
  imports: [SharedModule, DynamicFormModule],
  exports: [JournalEntryFormComponent]
})
export class JournalEntryFormModule {}
