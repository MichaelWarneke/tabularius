import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { ApiAuthPartialState } from './api-auth.reducer';
import { apiAuthQuery } from './api-auth.selectors';
import {
  ApiAuthLogin,
  ApiAuthLogout,
  ApiAuthUpdateUser,
  ApiAuthRedirectLogin,
  ApiAuthSetRedirectUrl
} from './api-auth.actions';
import { ICredentials, IUser } from '@tabularius/shared/models';

@Injectable()
export class ApiAuthFacade {
  user$ = this.store.pipe(select(apiAuthQuery.getAuthUser));
  error$ = this.store.pipe(select(apiAuthQuery.getError));
  isAuth$ = this.store.pipe(select(apiAuthQuery.getIsAuth));
  userName$ = this.store.pipe(select(apiAuthQuery.getUserDisplayName));
  redirectUrl$ = this.store.pipe(select(apiAuthQuery.getRedirectUrl));

  constructor(private store: Store<ApiAuthPartialState>) {}

  login(credentials: ICredentials) {
    this.store.dispatch(new ApiAuthLogin(credentials));
  }

  logout() {
    this.store.dispatch(new ApiAuthLogout());
  }

  redirectLogin(url: string) {
    this.setRedirectUrl(url);
    this.store.dispatch(new ApiAuthRedirectLogin());
  }

  updateUser(user: IUser) {
    this.store.dispatch(new ApiAuthUpdateUser(user));
  }

  setRedirectUrl(url: string) {
    this.store.dispatch(new ApiAuthSetRedirectUrl(url));
  }
}
