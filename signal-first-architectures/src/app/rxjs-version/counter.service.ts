import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CounterService {
  private counters = Array.from({ length: 10 }, () => new BehaviorSubject<number>(0));
  counters$ = this.counters.map(c => c.asObservable());

  increment(index: number): void {
    const current = this.counters[index].value;
    this.counters[index].next(current + 1);
  }

  resetAll(): void {
    this.counters.forEach(counter => counter.next(0));
  }
}
