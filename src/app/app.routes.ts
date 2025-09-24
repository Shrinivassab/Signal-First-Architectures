import { Routes } from '@angular/router';
import { DashboardComponent } from './rxjs-version/dashboard.component';
import { NgrxDashboardComponent } from './ngrx-version/ngrx-dashboard.component';
import { SignalDashboardComponent } from './signal-version/signal-dashboard.component';
import { NgRxBenchmarkComponent } from './benchmarks/ngrx-benchmark.component';
import { RxjsBenchmarkComponent } from './benchmarks/rxjs-benchmark.component';
import { SignalBenchmarkComponent } from './benchmarks/signal-benchmark.component';


export const routes: Routes = [
  { path: 'signal-benchmark', component: SignalBenchmarkComponent },
  { path: 'rxjs-benchmark', component: RxjsBenchmarkComponent },
  { path: 'ngrx-benchmark', component: NgRxBenchmarkComponent },
  { path: 'rxjs', component: DashboardComponent },
  { path: 'ngrx', component: NgrxDashboardComponent },
  { path: 'signals', component: SignalDashboardComponent },  
  { path: '', redirectTo: 'rxjs', pathMatch: 'full' }
];
