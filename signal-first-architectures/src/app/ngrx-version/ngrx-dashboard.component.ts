import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { resetAll } from './counter.actions';
import { CounterWidgetComponent } from './ngrx-counter-widget.component';

@Component({
  selector: 'app-ngrx-dashboard',
  standalone: true,
  imports: [CommonModule, CounterWidgetComponent],
  templateUrl: './ngrx-dashboard.component.html',
  styleUrls: ['./ngrx-dashboard.component.css']
})
export class NgrxDashboardComponent {
  indexes = Array.from({ length: 10 }, (_, i) => i);

  constructor(private store: Store) {}

  reset(): void {
    this.store.dispatch(resetAll());
  }
}
