import { Component, OnInit } from '@angular/core';
import { ApiAuthFacade } from '@tabularius/core/store';
import { Observable } from 'rxjs';
import { IUser, ICredentials } from '@tabularius/shared/models';
import { AccountFacade } from '../+state/account.facade';

@Component({
  selector: 'app-account-app-account-container',
  templateUrl: './app-account-container.component.html',
  styleUrls: ['./app-account-container.component.scss']
})
export class AppAccountContainerComponent implements OnInit {
  user$: Observable<IUser | null>;
  showProgress$: Observable<boolean>;
  constructor(private locStore: AccountFacade) {
    this.user$ = locStore.user$;
    this.showProgress$ = locStore.loading$;
  }

  ngOnInit() {}

  save(user: IUser) {
    this.locStore.update(user);
  }

  login(credentials: ICredentials) {
    this.locStore.login(credentials);
  }

  logout() {
    this.locStore.logout();
  }
}
