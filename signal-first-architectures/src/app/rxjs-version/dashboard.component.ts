import { Component } from '@angular/core';
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
  indexes = Array.from({ length: 10 }, (_, i) => i);

  constructor(private counterService: CounterService) {}

  reset(): void {
    this.counterService.resetAll();
  }
}
