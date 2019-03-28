import { IJournal, IJournalEntry } from '@tabularius/shared/models';
import {
  FormControlTextbox,
  FormControlDate,
  Validators,
  FormControlArray
} from '@tabularius/shared/dynamic-form';
import {
  FormArray,
  FormGroup,
  AbstractControl,
  FormControl,
  ValidatorFn,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormBuilder
} from '@angular/forms';

export class JournalEntryFormModel implements IJournalEntry {
  account = new FormControlTextbox('', [Validators.required]);
  amount = new FormControlTextbox('', [Validators.required]);
  currency = new FormControlTextbox('AUD', [Validators.required]);
  amountForeignCurrency = new FormControlTextbox('', []);
  currencyForeign = new FormControlTextbox('', []);
  comment = new FormControlTextbox('', []);
  constructor() {
    this.account.label = 'Account';
    this.amount.label = 'Amount';
    this.currency.label = 'Currency';
    this.amountForeignCurrency.label = 'Amount Foreign';
    this.currencyForeign.label = 'Foreign Currency';
    this.comment.label = 'Comment';
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
  ); // = new FormControlArray([new JournalEntryFormModel()]);
  constructor() {
    this.date.label = 'Date';
    this.dateOfTransaction.label = 'Transaction Date';
    this.dateOfEstimateTransaction.label = 'Est. Trans. Date';
    this.customer.label = 'Customer';
    this.supplier.label = 'Supplier';
    this.employee.label = 'Employee';
    this.comment.label = 'Comment';
  }
}

export class FormSetup {
  model = new JournalFormModel();
  submitButtonText = 'Save';
  copyButtonText = 'Copy';
  deleteButtonText = 'Delete';
  resetButtonText = 'Reset';
  /*  constructor(fb: FormBuilder) {
    this.model = fb.group({
      ...new JournalFormModel(),
      entries: fb.array([fb.group(new JournalEntryFormModel())])
    });
  }
  */
}

export class FormEntrySetup {
  model = new JournalEntryFormModel();
  copyButtonText = 'Add';
  deleteButtonText = 'Delete';
}
