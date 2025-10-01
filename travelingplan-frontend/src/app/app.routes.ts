import { Routes } from '@angular/router';
import { TripsComponent } from './components/trips/trips.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturePageComponent } from './components/feature-page/feature-page.component';


export const routes: Routes = [
{ path: '', component: HomeComponent },          // <--- Ruta raíz
  { path: 'trips', component: TripsComponent },
   { path: 'funciones/:feature', component: FeaturePageComponent },
  { path: '**', redirectTo: '' }   
];
