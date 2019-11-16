import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '@tabu-lib/models';

@Component({
  selector: 'coe-list-item-account',
  templateUrl: './list-item-account.component.html',
  styleUrls: ['./list-item-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemAccountComponent implements OnInit {
  @Input() account: Account | null = null;
  @Output() deleteAccount = new EventEmitter<Account>();
  constructor() { }

  ngOnInit() {
  }

  onDelete(account: Account) {
    this.deleteAccount.emit(account);
  }

}
