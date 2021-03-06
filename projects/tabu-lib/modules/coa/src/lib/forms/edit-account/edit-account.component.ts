import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Account } from '@tabu-lib/models';


export interface Group {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'coa-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditAccountComponent implements OnInit {
  accountForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    group_id: [''],
    group_name: [''],
    subGroup_id: [''],
    subGroup_name: [''],
    statement_id: [''],
    statement_name: ['']
  })
  @Output() saveAccount = new EventEmitter<Account>();
  @Output() newAccount = new EventEmitter();
  private _account: Account | null = null;
  @Input()
  set account(account: Account | null) {
    this._account = account;
    if (account == null) {
      this.accountForm.reset();
    }
    else {
      this.accountForm.patchValue(this._account as any);
    }

  };

  get account() {
    return this._account;
  }

  groups: Group[] = [
    { value: 'expense', viewValue: 'Expense' },
    { value: 'income', viewValue: 'Income' },
    { value: 'current-liability', viewValue: 'Current liabilities' },
    { value: 'current-assets', viewValue: 'Current assets' },
    { value: 'long-term-liabilities', viewValue: 'Long-term liabilities' },
    { value: 'long-term-assets', viewValue: 'Long term assets' }
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  getName() {
    return this.accountForm.get('name') as FormControl;
  }

  onSubmit() {
    this.saveAccount.emit(this.accountForm.value as Account);
  }

  onNew() {
    console.log("New");
    this.accountForm.reset();
    this.newAccount.emit();
  }

}
