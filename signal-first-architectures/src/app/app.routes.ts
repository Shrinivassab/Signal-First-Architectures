import { Routes } from '@angular/router';
import { DashboardComponent } from './rxjs-version/dashboard.component';
import { NgrxDashboardComponent } from './ngrx-version/ngrx-dashboard.component';
import { SignalDashboardComponent } from './signal-version/signal-dashboard.component';


export const routes: Routes = [
  { path: 'rxjs', component: DashboardComponent },
  { path: 'ngrx', component: NgrxDashboardComponent },
  { path: 'signals', component: SignalDashboardComponent },  
  { path: '', redirectTo: 'rxjs', pathMatch: 'full' }
];
