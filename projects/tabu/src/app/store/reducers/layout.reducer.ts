import { createReducer, on } from '@ngrx/store';

import { LayoutActions } from '@tabu/store/actions';

export enum ThemeType {
  'dark',
  'light'
}

export const layoutFeatureKey = 'layout';

export interface State {
  theme: ThemeType;
}

const initialState: State = {
  theme: ThemeType.dark,
};

export const reducer = createReducer(
  initialState,
  // Even thought the `state` is unused, it helps infer the return type
  on(LayoutActions.setDarkTheme, state => ({ theme: ThemeType.dark })),
  on(LayoutActions.setLightTheme, state => ({ theme: ThemeType.light }))
);

export const selectTheme = (state: State) => state.theme;
