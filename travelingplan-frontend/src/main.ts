import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { LucideAngularModule, Plane, Hotel, Map, Car, Utensils, TentTree } from 'lucide-angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    importProvidersFrom(LucideAngularModule.pick({ Plane, Hotel, Map, Car, Utensils, TentTree }))
  ]
}).catch(err => console.error(err));
