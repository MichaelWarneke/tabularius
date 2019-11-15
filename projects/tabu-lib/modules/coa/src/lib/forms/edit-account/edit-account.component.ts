import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


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
  groups: Group[] = [
    { value: 'expense', viewValue: 'Expense' },
    { value: 'income', viewValue: 'Income' },
    { value: 'current-liability', viewValue: 'Current liabilities' },
    { value: 'current-assets', viewValue: 'Current assets' },
    { value: 'long-term-liabilities', viewValue: 'Long-term liabilities' },
    { value: 'long-term-assets', viewValue: 'Long term assets' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
