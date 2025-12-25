import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { CounterService } from './counter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-widget',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './counter-widget.component.html',
  styleUrls: ['./counter-widget.component.css']
})
export class CounterWidgetComponent implements OnInit {
  @Input() index!: number;
  private counterService = inject(CounterService);
  count$!: Observable<number>;

  ngOnInit(): void {
    this.count$ = this.counterService.counters$[this.index];
  }

  increment(): void {
    this.counterService.increment(this.index);
  }
}
