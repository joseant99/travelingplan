import { Routes } from '@angular/router';
import { TripsComponent } from './components/trips/trips.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
{ path: '', component: HomeComponent },          // <--- Ruta raíz
  { path: 'trips', component: TripsComponent },
  { path: '**', redirectTo: '' }   
];
