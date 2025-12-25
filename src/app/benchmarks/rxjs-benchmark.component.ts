import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-rxjs-benchmark',
  imports: [CommonModule],
  template: `
    <button (click)="updateAll()">Update All</button>
    @for (node of nodes; track node) {
      <div>{{ node.value }}</div>
    }
    <div>Last update time: {{ lastUpdateTime }} ms</div>
  `
})
export class RxjsBenchmarkComponent {
  nodes = Array.from({ length: 100000 }, () => new BehaviorSubject<number>(0));
  lastUpdateTime = 0;

  updateAll() {
    const start = performance.now();
    this.nodes.forEach(node => node.next(Math.random()));
    const end = performance.now();
    this.lastUpdateTime = Math.round(end - start);
    console.log('RxJS update time:', this.lastUpdateTime, 'ms');
  }
}