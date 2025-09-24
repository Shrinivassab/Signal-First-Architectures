import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter-widget',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './counter-widget.component.html',
  styleUrls: ['./counter-widget.component.css']
})
export class CounterWidgetComponent implements OnInit {
  @Input() index!: number;
  count$!: any;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.count$ = this.counterService.counters$[this.index];
  }

  increment(): void {
    this.counterService.increment(this.index);
  }
}
