import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { increment } from './counter.actions';
import { selectCounter } from './counter.selectors';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngrx-counter-widget',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './ngrx-counter-widget.component.html',
  styleUrls: ['./ngrx-counter-widget.component.css']
})
export class CounterWidgetComponent implements OnInit {
  @Input() index!: number;
  count$!: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.count$ = this.store.pipe(select(selectCounter(this.index)));
  }

  increment(): void {
    this.store.dispatch(increment({ index: this.index }));
  }
}
