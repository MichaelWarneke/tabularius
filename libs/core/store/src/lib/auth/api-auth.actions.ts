import { Action } from '@ngrx/store';
import { ICredentials, IUser } from '@tabularius/shared/models';

export enum ApiAuthActionTypes {
  ApiAuthChanged = '[ApiAuth] Auth Changed',
  ApiAuthGetUser = '[ApiAuth] Get User',
  ApiAuthGetUserSuccess = '[ApiAuth] Get User Success',
  ApiAuthLogin = '[ApiAuth] Login',
  ApiAuthLogout = '[ApiAuth] Logout',
  ApiAuthRegister = '[ApiAuth] Register',
  ApiAuthUpdateUser = '[ApiAuth] Update User',
  ApiAuthRedirectLogin = '[ApiAuth] Redirect Login',
  ApiAuthError = '[ApiAuth] Error',
  ApiAuthSuccess = '[ApiAuth] Success',
  ApiAuthSetRedirectUrl = '[ApiAuth] Set Redirect URL'
}

export class ApiAuthChanged implements Action {
  readonly type = ApiAuthActionTypes.ApiAuthChanged;
  constructor(public user: IUser | null) {}
}

export class ApiAuthGetUser implements Action {
  readonly type = ApiAuthActionTypes.ApiAuthGetUser;
}

export class ApiAuthGetUserSuccess implements Action {
  readonly type = ApiAuthActionTypes.ApiAuthGetUserSuccess;
  constructor(public user: IUser) {}
}

export class ApiAuthLogin implements Action {
  readonly type = ApiAuthActionTypes.ApiAuthLogin;
  constructor(public credentials: ICredentials) {}
}

export class ApiAuthLogout implements Action {
  readonly type = ApiAuthActionTypes.ApiAuthLogout;
}

export class ApiAuthRegister implements Action {
  readonly type = ApiAuthActionTypes.ApiAuthRegister;
  constructor(public credentials: ICredentials) {}
}

export class ApiAuthUpdateUser implements Action {
  readonly type = ApiAuthActionTypes.ApiAuthUpdateUser;
  constructor(public user: IUser) {}
}

export class ApiAuthRedirectLogin implements Action {
  readonly type = ApiAuthActionTypes.ApiAuthRedirectLogin;
}

export class ApiAuthError implements Action {
  readonly type = ApiAuthActionTypes.ApiAuthError;
  constructor(public message: string) {}
}

export class ApiAuthSuccess implements Action {
  readonly type = ApiAuthActionTypes.ApiAuthSuccess;
  constructor(public message: string) {}
}

export class ApiAuthSetRedirectUrl implements Action {
  readonly type = ApiAuthActionTypes.ApiAuthSetRedirectUrl;
  constructor(public url: string | null) {}
}

export type ApiAuthActions =
  | ApiAuthChanged
  | ApiAuthGetUser
  | ApiAuthGetUserSuccess
  | ApiAuthLogin
  | ApiAuthLogout
  | ApiAuthRegister
  | ApiAuthUpdateUser
  | ApiAuthRedirectLogin
  | ApiAuthError
  | ApiAuthSuccess
  | ApiAuthSetRedirectUrl;

export const fromApiAuthActions = {
  ApiAuthChanged,
  ApiAuthGetUser,
  ApiAuthGetUserSuccess,
  ApiAuthLogin,
  ApiAuthLogout,
  ApiAuthRegister,
  ApiAuthUpdateUser,
  ApiAuthRedirectLogin,
  ApiAuthError,
  ApiAuthSuccess,
  ApiAuthSetRedirectUrl
};
