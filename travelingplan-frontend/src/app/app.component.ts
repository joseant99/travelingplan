import { Component } from '@angular/core';
import { TripsComponent } from './components/trips/trips.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripsComponent],
  template: `
    <h1>Mi aplicación de viajes</h1>
    <app-trips></app-trips>
  `
})
export class AppComponent {}
