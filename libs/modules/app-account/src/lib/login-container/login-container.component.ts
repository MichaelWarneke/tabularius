import { Component, OnInit } from '@angular/core';
import { AccountFacade } from '../+state/account.facade';
import { ICredentials } from '@tabularius/shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  error$: Observable<string | null>;
  constructor(private locStore: AccountFacade) {
    this.error$ = locStore.error$;
  }

  ngOnInit() {}

  login(credentials: ICredentials) {
    this.locStore.login(credentials);
  }
}
