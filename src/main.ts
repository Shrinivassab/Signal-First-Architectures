import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { counterReducer } from './app/ngrx-version/counter.reducer';
import { provideStore } from '@ngrx/store';
import { benchmarkReducer } from './app/benchmarks/ngrx-benchmark.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    provideStore({ counters: counterReducer, benchmark: benchmarkReducer }), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
});