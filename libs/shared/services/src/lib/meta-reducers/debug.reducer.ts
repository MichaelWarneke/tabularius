import { ActionReducer } from '@ngrx/store';

export function debugReducer<T>(reducer: ActionReducer<T>): ActionReducer<T> {
  return function(state, action) {
    const newState = reducer(state, action);
    console.log(`[DEBUG] action: ${action.type}`, {
      payload: (<any>action).payload,
      oldState: state,
      newState
    });
    return newState;
  };
}
