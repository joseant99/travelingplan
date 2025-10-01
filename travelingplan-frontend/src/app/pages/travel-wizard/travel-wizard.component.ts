import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-travel-wizard',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf],
  templateUrl: './travel-wizard.component.html',
})
export class TravelWizardComponent {
  @Output() wizardCompleted = new EventEmitter<string>();

  constructor(private cdr: ChangeDetectorRef) {}

  step = 1;

  // Destino
  searchText = '';
  selectedCity: any = null;
  cities = [
    { country: 'España', name: 'Madrid' },
    { country: 'España', name: 'Barcelona' },
    { country: 'Italia', name: 'Roma' },
    { country: 'Italia', name: 'Florencia' },
    { country: 'Japón', name: 'Tokio' },
  ];

  // Número de días
  days = 3;

  // Estilo de viaje
  styles = ['Económico', 'Lujo', 'Familiar', 'Aventura', 'Relax'];
  selectedStyle = '';

  // Intereses
  interests = ['Arte', 'Gastronomía', 'Naturaleza', 'Historia', 'Fiesta'];
  selectedInterests: string[] = [];

  filteredCities() {
    const val = this.searchText.toLowerCase();
    return this.cities.filter(c => c.name.toLowerCase().includes(val) || c.country.toLowerCase().includes(val));
  }

  incrementDays() {
  this.days++;
  this.cdr.detectChanges(); // fuerza la actualización de la vista
}


decrementDays() {
  this.days = Math.max(1, this.days - 1);
  this.cdr.detectChanges(); // fuerza la actualización de la vista
}

isCountry(name: string): boolean {
  // Devuelve true si el nombre coincide con algún país de tus locations
  return this.cities?.some(loc => loc.country === name);
}

  selectCity(city: any) {
    this.selectedCity = city;
    this.searchText = `${city.country} - ${city.name}`;
  }

  toggleInterest(interest: string) {
    if (this.selectedInterests.includes(interest)) {
      this.selectedInterests = this.selectedInterests.filter(i => i !== interest);
    } else {
      this.selectedInterests.push(interest);
    }
  }

  nextStep() {
    if (this.step === 4) {
      this.completeWizard();
    } else {
      this.step++;
    }
  }

  prevStep() {
    if (this.step > 1) this.step--;
  }

  completeWizard() {
    const prompt = `Crea una guía de viaje de ${this.days} días en ${this.selectedCity?.name} (${this.selectedCity?.country}), estilo ${this.selectedStyle}, incluyendo: ${this.selectedInterests.join(', ')}.`;
    this.wizardCompleted.emit(prompt);
  }
}
