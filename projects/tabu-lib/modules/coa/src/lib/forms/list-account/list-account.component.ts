import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }

}
