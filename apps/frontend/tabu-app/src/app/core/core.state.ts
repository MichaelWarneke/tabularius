import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '@tabularius/shared/services';
import { storeFreeze } from 'ngrx-store-freeze';

import { initStateFromLocalStorageReducer } from '@tabularius/shared/services';
import { debugReducer } from '@tabularius/shared/services';

import { environment } from '../../environments/environment';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorageReducer
];
if (!environment.production) {
  metaReducers.unshift(storeFreeze);
  metaReducers.unshift(debugReducer);
}

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');
