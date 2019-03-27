import { Component, OnInit } from '@angular/core';
import { AccountFacade } from '../+state/account.facade';
import { ICredentials } from '@tabularius/shared/models';

@Component({
  selector: 'app-account-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  constructor(private locStore: AccountFacade) {}

  ngOnInit() {}

  login(credentials: ICredentials) {
    this.locStore.login(credentials);
  }
}
