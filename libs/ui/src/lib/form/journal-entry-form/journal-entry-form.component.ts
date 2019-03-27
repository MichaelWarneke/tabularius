import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { IJournal } from '@tabularius/shared/models';
import { FormSetup } from './journal-entry-form.model';

@Component({
  selector: 'tabu-journal-entry-form',
  templateUrl: './journal-entry-form.component.html',
  styleUrls: ['./journal-entry-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalEntryFormComponent implements OnInit {
  _journal: IJournal | null = null;
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
  ngOnInit() {}

  onSave(data: IJournal) {}

  onDelete(data: IJournal) {}

  onCopy(data: IJournal) {}
}
