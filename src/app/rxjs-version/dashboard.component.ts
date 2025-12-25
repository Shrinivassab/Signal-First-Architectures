import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterWidgetComponent } from './counter-widget.component';
import { CounterService } from './counter.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CounterWidgetComponent],
  providers: [CounterService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private counterService = inject(CounterService);
  indexes = Array.from({ length: 10 }, (_, i) => i);

  reset(): void {
    this.counterService.resetAll();
  }
}
