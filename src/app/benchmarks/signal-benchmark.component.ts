import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-benchmark',
  template: `
    <button (click)="updateAll()">Update All</button>
    @for (node of nodes; track node) {
      <div>{{ node() }}</div>
    }
    <div>Last update time: {{ lastUpdateTime }} ms</div>
  `,
  imports: []
})
export class SignalBenchmarkComponent {
  nodes = Array.from({ length: 100000 }, () => signal(0));
  lastUpdateTime = 0;

  updateAll() {
    const start = performance.now();
    this.nodes.forEach(node => node.set(Math.random()));
    const end = performance.now();
    this.lastUpdateTime = Math.round(end - start);
    console.log('Signal update time:', this.lastUpdateTime, 'ms');
  }
}