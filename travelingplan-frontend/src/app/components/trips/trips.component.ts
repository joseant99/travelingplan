import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, JsonPipe } from '@angular/common';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-trips',
  standalone: true, // 🔑 componente standalone
  imports: [FormsModule, NgIf, JsonPipe],
  template: `
    <h2>Generador de viajes</h2>
    <input [(ngModel)]="prompt" placeholder="Escribe tu prompt" />
    <button (click)="generate()">Generar viaje</button>
    <p *ngIf="loading">Generando...</p>
    <pre *ngIf="result">{{ result | json }}</pre>
  `,
  styles: [`
    h2 { font-family: sans-serif; color: #555; }
    input { padding: 5px; margin-right: 10px; width: 300px; }
    button { padding: 5px 10px; }
    pre { background: #f0f0f0; padding: 10px; margin-top: 15px; }
  `]
})
export class TripsComponent {
  prompt = '';
  result: any;
  loading = false;

  constructor(private tripsService: TripsService) {}

  async generate() {
    if (!this.prompt.trim()) return;
    this.loading = true;
    try {
      this.result = await this.tripsService.generateTrip(this.prompt);
    } catch (err) {
      console.error(err);
      this.result = { error: (err as Error).message };
    } finally {
      this.loading = false;
    }
  }
}
