import { Action } from '@ngrx/store';
import { Entity } from './account.reducer';

export enum AccountActionTypes {
  LoadAccount = '[Account] Load Account',
  AccountLoaded = '[Account] Account Loaded',
  AccountLoadError = '[Account] Account Load Error'
}

export class LoadAccount implements Action {
  readonly type = AccountActionTypes.LoadAccount;
}

export class AccountLoadError implements Action {
  readonly type = AccountActionTypes.AccountLoadError;
  constructor(public payload: any) {}
}

export class AccountLoaded implements Action {
  readonly type = AccountActionTypes.AccountLoaded;
  constructor(public payload: Entity[]) {}
}

export type AccountAction = LoadAccount | AccountLoaded | AccountLoadError;

export const fromAccountActions = {
  LoadAccount,
  AccountLoaded,
  AccountLoadError
};
