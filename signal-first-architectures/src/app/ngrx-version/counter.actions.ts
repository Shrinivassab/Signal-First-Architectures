import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter] Increment',
  props<{ index: number }>()
);

export const resetAll = createAction('[Counter] Reset All');
