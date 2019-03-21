import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { IJournal } from '@tabularius/shared/models';
import { Validators, FormBuilder } from '@angular/forms';

export class JournalModel {
  date = [{ value: '', disabled: true }, Validators.required];
  email = ['', Validators.required];
  displayName = [''];
  photoURL = [''];
}

@Component({
  selector: 'tabu-journal-entry-form',
  templateUrl: './journal-entry-form.component.html',
  styleUrls: ['./journal-entry-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalEntryFormComponent implements OnInit {
  _journal: IJournal | null = null;

  @Output() save = new EventEmitter<IJournal>();
  @Output() delete = new EventEmitter<IJournal>();
  @Output() copy = new EventEmitter<IJournal>();

  @Input()
  set journal(item: IJournal | null) {
    this._journal = item;
    if (item) {
      this.form.setValue({
        id: item.id,
        email: item.customer,
        displayName: item.customer,
        photoURL: item.customer
      });
    } else {
      this.form.reset();
    }
  }
  get user(): IJournal | null {
    return this._journal;
  }

  form = this.fb.group(new JournalModel());

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  submit() {
    if (this._journal) {
      this.save.emit({
        ...this.form.value,
        uid: this._journal.id
      } as IJournal);
    }
  }

  onDelete() {}

  onCopy() {}
}
