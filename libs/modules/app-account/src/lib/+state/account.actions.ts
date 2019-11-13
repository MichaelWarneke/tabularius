import { Action } from '@ngrx/store';
import { ICredentials, IUser } from '@tabularius/shared/models';

export enum AccountActionTypes {
  Login = '[UI Account] Login',
  Logout = '[UI Account] Logout',
  Update = '[UI Account] Update',
  Success = '[UI Account] Success',
  Error = '[UI Account] Error'
}

export class Login implements Action {
  readonly type = AccountActionTypes.Login;
  constructor(public credentials: ICredentials) {}
}

export class Logout implements Action {
  readonly type = AccountActionTypes.Logout;
}

export class Update implements Action {
  readonly type = AccountActionTypes.Update;
  constructor(public user: IUser) {}
}

export class Success implements Action {
  readonly type = AccountActionTypes.Success;
}

export class Error implements Action {
  readonly type = AccountActionTypes.Error;
  constructor(public error: string) {}
}

export type AccountActions = Login | Logout | Update | Success | Error;

export const fromAccountActions = {
  Login,
  Logout,
  Update,
  Success,
  Error
};
