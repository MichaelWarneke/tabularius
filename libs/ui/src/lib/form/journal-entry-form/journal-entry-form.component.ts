import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { IJournal } from '@tabularius/shared/models';

@Component({
  selector: 'tabu-journal-entry-form',
  templateUrl: './journal-entry-form.component.html',
  styleUrls: ['./journal-entry-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JournalEntryFormComponent implements OnInit {
  @Input() journal: IJournal | null = null;

  @Output() save = new EventEmitter<IJournal>();
  @Output() delete = new EventEmitter<IJournal>();
  @Output() copy = new EventEmitter<IJournal>();

  constructor() {
  }
  ngOnInit() {}

  onSubmit() {}

  onDelete() {}

  onCopy() {}
}
