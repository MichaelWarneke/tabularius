import { createAction, props } from '@ngrx/store';

export const setDarkTheme = createAction(
  '[Main] Set Dark Theme'
);

export const setLightTheme = createAction(
  '[Main] Set Light Theme'
);
