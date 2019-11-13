import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router.state';

export const selectRouterState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>('router');

export const selectIdOfRoute = createSelector(
  selectRouterState,
  state =>
    state &&
    state.state &&
    state.state.params &&
    (state.state.params.id as string | null)
);
