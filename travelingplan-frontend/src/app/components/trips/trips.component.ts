import { Component } from '@angular/core';
import { NgForOf, NgClass, NgIf } from '@angular/common';
import { TripsService } from '../../services/trips.service';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf],
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {
  messages: Message[] = [];
  loading = false;

  // Opciones dinámicas
  currentOptions: string[] = [];

  // Datos del viaje
  sitio: string = '';
  fecha: string = '';

  constructor(private tripsService: TripsService) {
    this.startChat();
  }

  startChat() {
    this.addBotMessage('¡Hola! Vamos a planear tu viaje.¡Hola! Vamos a planear tu viaje.¡Hola! Vamos a planear tu viaje.¡Hola! Vamos a planear tu viaje.¡Hola! Vamos a planear tu viaje.¡Hola! Vamos a planear tu viaje.¡Hola! Vamos a planear tu viaje.');
    // Primer paso: opciones de sitios

    this.currentOptions = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'];
    this.addBotMessage('Elige un sitio:');

  }

  addBotMessage(text: string) {
    this.messages.push({ sender: 'bot', text });
  }

  addUserMessage(text: string) {
    this.messages.push({ sender: 'user', text });
  }

  async selectOption(option: string) {
    this.addUserMessage(option);

    if (!this.sitio) {
      // Primer paso: elegir sitio
      this.sitio = option;
      this.currentOptions = ['2025-10-01', '2025-10-15', '2025-11-01']; // ejemplo fechas
      this.addBotMessage('Elige la fecha:');
    } else if (!this.fecha) {
      // Segundo paso: elegir fecha
      this.fecha = option;
      this.currentOptions = [];
      await this.generateTrip();
    }
  }

  async generateTrip() {
    this.loading = true;
    const prompt = `Quiero viajar a ${this.sitio} en la fecha ${this.fecha}`;
    try {
      const result = await this.tripsService.generateTrip(prompt);
      this.addBotMessage(`¡Listo! Aquí tienes tu viaje:\n${JSON.stringify(result)}`);
    } catch (err) {
      this.addBotMessage(`Error: ${(err as Error).message}`);
    } finally {
      this.loading = false;
    }
  }
}
