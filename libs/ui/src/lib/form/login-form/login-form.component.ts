import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormSetup } from './login-form.model';
import { ICredentials } from '@tabularius/shared/models';

@Component({
  selector: 'tabu-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() login = new EventEmitter<any>();

  formModel = new FormSetup();
  credentials: ICredentials = { email: '', password: '', userName: '' };

  constructor() {}

  ngOnInit() {}
  onlogin(credentials: ICredentials) {
    this.login.emit(credentials);
  }
}
