import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store, createAction, createReducer, on, props } from '@ngrx/store';
import { Observable } from 'rxjs';

// Actions
export const updateNode = createAction('[Benchmark] Update Node', props<{ index: number, value: number }>());
export const updateAllNodes = createAction('[Benchmark] Update All Nodes', props<{ values: number[] }>());

// Initial State
const initialState = Array.from({ length: 100000 }, () => 0);

// Reducer
export const benchmarkReducer = createReducer(
  initialState,
  on(updateNode, (state, { index, value }) => {
    const newState = [...state];
    newState[index] = value;
    return newState;
  }),
  on(updateAllNodes, (state, { values }) => values)
);

@Component({
  selector: 'app-ngrx-benchmark',
imports: [AsyncPipe],
  standalone: true,
  template: `
    <button (click)="updateAll()">Update All</button>
    @for (node of nodes$ | async; track node) {
      <div>{{ node }}</div>
    }
    <div>Last update time: {{ lastUpdateTime }} ms</div>
  `
})
export class NgRxBenchmarkComponent {
  nodes$: Observable<number[]>;
  lastUpdateTime = 0;

  constructor(private store: Store<{ benchmark: number[] }>) {
    this.nodes$ = this.store.select('benchmark');
  }

  updateAll() {
    const start = performance.now();
    const values = Array.from({ length: 100000 }, () => Math.random());
    this.store.dispatch(updateAllNodes({ values }));
    const end = performance.now();
    this.lastUpdateTime = Math.round(end - start);
    console.log('NgRx update time:', this.lastUpdateTime, 'ms');
  }
}