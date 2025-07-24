import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-benchmark',
  template: `
    <button (click)="updateAll()">Update All</button>
    <div *ngFor="let node of nodes">{{ node() }}</div>
    <div>Last update time: {{ lastUpdateTime }} ms</div>
  `,
  imports: [CommonModule]
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