import { ICredentialsAbstract } from '@tabularius/shared/models';
import {
  FormControlTextbox,
  FormControlDate,
  Validators,
  FormControlCheckbox,
  FormControlSelect,
  FormControlRadioButton
} from '@tabularius/shared/dynamic-form';

export class CredentialFormModel implements ICredentialsAbstract {
  email = new FormControlTextbox('', [Validators.required, Validators.email]);
  userName = new FormControlTextbox('', []);
  password = new FormControlTextbox('', [Validators.required]);
  //TODO remove (Only for testing)
  test = new FormControlCheckbox(false, []);
  sel = new FormControlSelect('', []);
  rad = new FormControlRadioButton('', []);
  //TODO remove (Only for testing)
  constructor() {
    this.email.label = 'Email';
    this.userName.label = 'User Name';
    this.password.label = 'Password';
    this.password.type = 'password';
    //TODO remove (Only for testing)
    this.test.label = 'Something';
    this.sel.label = 'Please select';
    this.sel.options = ['erster', 'zeiter', 'dritter'];
    this.rad.label = 'Please select';
    this.rad.options = ['erster', 'zeiter', 'dritter'];
    //TODO remove (Only for testing)
  }
}

export class FormSetup {
  model = new CredentialFormModel();
  submitButtonText = 'Login';
}
