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
  photoURL = new FormControlTextbox('', []);
  constructor() {
    this.uid.label = 'User ID';
    this.email.label = 'Email';
    this.displayName.label = 'User Name';
    this.photoURL.label = 'Photo URL';
  }
}

export class FormSetup {
  model = new UserFormModel();
  submitButtonText = 'Save';
}
