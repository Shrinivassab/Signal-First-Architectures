import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCounters = createFeatureSelector<number[]>('counters');

export const selectCounter = (index: number) =>
  createSelector(selectCounters, state => state[index]);
