import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { IJournal, IJournalEntry } from '@tabularius/shared/models';
import { FormSetup } from './journal-entry-form.model';

const fakeJournalEntry = {
  account: 'office',
  amount: 12.4,
  currency: 'AUD',
  amountForeignCurrency: null,
  currencyForeign: null,
  comment: 'Hello'
};

const fakeJournal = {
  id: '123',
  date: new Date(Date.now()),
  dateOfTransaction: null,
  dateOfEstimateTransaction: null,
  supplier: null,
  customer: 'Cust',
  employee: null,
  comment: 'Hello',
  entries: [fakeJournalEntry]
};
@Component({
  selector: 'tabu-journal-entry-form',
  templateUrl: './journal-entry-form.component.html',
  styleUrls: ['./journal-entry-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalEntryFormComponent implements OnInit {
  _journal: IJournal | null = fakeJournal;
  formModel = new FormSetup();

  @Output() save = new EventEmitter<IJournal>();
  @Output() delete = new EventEmitter<IJournal>();
  @Output() copy = new EventEmitter<IJournal>();

  @Input()
  set journal(journal: IJournal | null) {
    this._journal = journal;
  }

  get journal() {
    return this._journal;
  }

  constructor() {}
  ngOnInit() {
    console.log('Journal MODEL :', this.formModel);
  }

  onSave(data: IJournal) {}

  onDelete(data: IJournal) {}

  onCopy(data: IJournal) {}

  onAddEntry(data: IJournalEntry) {
    if (this.journal) this.journal.entries.push(data);
  }

  onDeleteEntry(data: IJournalEntry) {}
}
