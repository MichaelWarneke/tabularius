import { ICredentialsAbstract } from '@tabularius/shared/models';
import {
  FormControlTextbox,
  FormControlDate,
  Validators
} from '@tabularius/shared/dynamic-form';

export class CredentialFormModel implements ICredentialsAbstract {
  email = new FormControlTextbox('', [Validators.required]);
  userName = new FormControlTextbox('', []);
  password = new FormControlTextbox('', [Validators.required]);
}

export class FormSetup {
  model = new CredentialFormModel();
  submitButtonText = 'Login';
}
