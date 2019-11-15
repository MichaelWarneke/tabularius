import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
  combineReducers
} from '@ngrx/store';


export const coaFeatureKey = 'coa';



export interface CoAState {
}
export const reducers: ActionReducerMap<CoAState> = {
};

export const metaReducers: MetaReducer<CoAState>[] = [];

export const selectCoaState = createFeatureSelector<CoAState>(coaFeatureKey);

