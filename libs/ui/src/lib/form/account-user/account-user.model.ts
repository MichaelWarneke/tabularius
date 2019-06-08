import { IUserAbstract } from '@tabularius/shared/models';
import {
  FormControlTextbox,
  FormControlDate,
  Validators
} from '@tabularius/shared/dynamic-form';

export class UserFormModel implements IUserAbstract {
  uid = new FormControlTextbox('', [Validators.required]);
  email = new FormControlTextbox('', [Validators.required, Validators.email]);
  displayName = new FormControlTextbox('', [Validators.required]);
  photoURL = new FormControlTextbox('', []);
  constructor() {
    this.uid.label = 'User ID';
    this.uid.maxWidth = 300;
    this.email.label = 'Email';
    this.email.maxWidth = 300;
    this.displayName.label = 'User Name';
    this.displayName.maxWidth = 300;
    this.photoURL.label = 'Photo URL';
    this.photoURL.maxWidth = 300;
  }
}

export class FormSetup {
  model = new UserFormModel();
  submitButtonText = 'Save';
}
