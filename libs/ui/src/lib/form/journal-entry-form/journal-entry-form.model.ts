import { IJournal } from '@tabularius/shared/models';
import {
  FormControlTextbox,
  FormControlDate,
  Validators
} from '@tabularius/shared/dynamic-form';

export class JournalFormModel implements IJournal {
  date = new FormControlDate('', [Validators.required]);
  dateOfTransaction = new FormControlDate('', [Validators.required]);
  dateOfEstimateTransaction = new FormControlDate('', [Validators.required]);
  customer = new FormControlTextbox('', [Validators.required]);
  supplier = new FormControlTextbox('', [Validators.required]);
  employee = new FormControlTextbox('', [Validators.required]);
  comment = new FormControlTextbox('', [Validators.required]);
  entries = [];
}

export class FormSetup {
  model = new JournalFormModel();
  submitButtonText = 'Save';
  copyButtonText = 'Copy';
}
