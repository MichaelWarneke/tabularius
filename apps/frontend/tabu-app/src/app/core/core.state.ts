import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router/router.state';
import { storeFreeze } from 'ngrx-store-freeze';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './meta-reducers/debug.reducer';

import { environment } from '../../environments/environment';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];
if (!environment.production) {
  metaReducers.unshift(storeFreeze);
  metaReducers.unshift(debug);
}

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');
