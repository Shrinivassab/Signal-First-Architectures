import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalCounterComponent } from './signal-counter.component';

@Component({
  selector: 'app-signal-dashboard',
  standalone: true,
  imports: [CommonModule, SignalCounterComponent],
  templateUrl: './signal-dashboard.component.html',
  styleUrls: ['./signal-dashboard.component.css']
})
export class SignalDashboardComponent {
  counters = signal(Array(10).fill(0));

  getIndexes(): number[] {
    return this.counters().map((_, i) => i);
  }

  reset(): void {
    this.counters.set(Array(10).fill(0));
  }

  increment(index: number): void {
    this.counters.update(arr => {
      const updated = [...arr];
      updated[index]++;
      return updated;
    });
  }

  getCounter(index: number): number {
    return this.counters()[index];
  }
}
