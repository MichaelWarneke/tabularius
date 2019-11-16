import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '@tabu-lib/models';

@Component({
  selector: 'coa-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListAccountComponent implements OnInit {
  @Input() accounts: Account[] = [];
  @Input() total: number | null = null;
  @Output() selectAccount = new EventEmitter<Account | null>();
  @Output() deleteAccount = new EventEmitter<Account>();
  @Input() selectedAccountId: string | null = null;

  constructor() { }

  ngOnInit() {
  }

  selectItem(account: Account | null) {
    this.selectAccount.emit(account);
  }
}
