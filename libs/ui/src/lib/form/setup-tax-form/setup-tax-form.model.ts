import { IUserAbstract } from '@tabularius/shared/models';
import {
  FormControlTextbox,
  FormControlDate,
  Validators
} from '@tabularius/shared/dynamic-form';

export class UserFormModel implements IUserAbstract {
  uid = new FormControlTextbox('', [Validators.required]);
  email = new FormControlTextbox('', [Validators.required]);
  displayName = new FormControlTextbox('', [Validators.required]);
  photoURL = new FormControlTextbox('', [Validators.required]);
}

export class FormSetup {
  model = new UserFormModel();
  submitButtonText = 'Save';
}
