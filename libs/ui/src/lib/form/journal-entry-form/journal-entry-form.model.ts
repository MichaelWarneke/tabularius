import { IJournal, IJournalEntry } from '@tabularius/shared/models';
import {
  FormControlTextbox,
  FormControlDate,
  Validators
} from '@tabularius/shared/dynamic-form';

export class JournalEntryFormModel implements IJournalEntry {
  account = new FormControlTextbox('', [Validators.required]);
  amount = new FormControlTextbox('', [Validators.required]);
  currency = new FormControlTextbox('AUD', [Validators.required]);
  amountForeignCurrency = new FormControlTextbox('', []);
  currencyForeign = new FormControlTextbox('', []);
  comment = new FormControlTextbox('', []);
  constructor() {
    this.account.label = 'Account';
    this.account.maxWidth = 200;
    this.amount.label = 'Amount';
    this.amount.maxWidth = 60;
    this.currency.label = 'Currency';
    this.currency.maxWidth = 60;
    this.amountForeignCurrency.label = 'Amount Foreign';
    this.amountForeignCurrency.maxWidth = 60;
    this.currencyForeign.label = 'Foreign Currency';
    this.currencyForeign.maxWidth = 60;
    this.comment.label = 'Comment';
    this.comment.maxWidth = 300;
  }
}
export class JournalFormModel implements IJournal {
  date = new FormControlDate('', [Validators.required]);
  dateOfTransaction = new FormControlDate('', []);
  dateOfEstimateTransaction = new FormControlDate('', []);
  customer = new FormControlTextbox('', []);
  supplier = new FormControlTextbox('', []);
  employee = new FormControlTextbox('', []);
  comment = new FormControlTextbox('', []);
  entries: JournalEntryFormModel[] = new Array<JournalEntryFormModel>(
    new JournalEntryFormModel()
  );
  constructor() {
    this.date.label = 'Date';
    this.dateOfTransaction.label = 'Transaction Date';
    this.dateOfEstimateTransaction.label = 'Est. Trans. Date';
    this.customer.label = 'Customer';
    this.customer.maxWidth = 150;
    this.supplier.label = 'Supplier';
    this.supplier.maxWidth = 150;
    this.employee.label = 'Employee';
    this.employee.maxWidth = 150;
    this.comment.label = 'Comment';
    this.comment.maxWidth = 300;
  }
}

export class FormSetup {
  model = new JournalFormModel();
  submitButtonText = 'Save';
  copyButtonText = 'Copy';
  deleteButtonText = 'Delete';
  resetButtonText = 'Reset';
}

export class FormEntrySetup {
  model = new JournalEntryFormModel();
  copyButtonText = 'Add';
  deleteButtonText = 'Delete';
}
