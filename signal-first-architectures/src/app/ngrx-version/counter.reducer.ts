import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const initialState = Array(10).fill(0);

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state, { index }) =>
    state.map((count, i) => (i === index ? count + 1 : count))
  ),
  on(CounterActions.resetAll, () => initialState)
);
