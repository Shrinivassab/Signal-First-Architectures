import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-counter.component.html',
  styleUrls: ['./signal-counter.component.css']
})
export class SignalCounterComponent {
  @Input() index!: number;
  @Input() value!: number;

  @Output() incrementEvent = new EventEmitter<number>();

  increment(): void {
    this.incrementEvent.emit(this.index);
  }
}
