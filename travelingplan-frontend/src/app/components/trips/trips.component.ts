import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForOf, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripsService } from '../../services/trips.service';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

interface Location {
  country: string;
  cities: string[];
}

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf, FormsModule],
  templateUrl: './trips.component.html',
})
export class TripsComponent implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  messages: Message[] = [];
  loading = false;

  userInput = '';
  locations: Location[] = [];
  filteredSuggestions: string[] = [];

  sitio = '';
  fecha = '';
  currentOptions: string[] = [];

  constructor(private tripsService: TripsService) {
    this.loadLocations();
    this.startChat();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.messagesContainer) {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    }
  }

  private loadLocations() {
    this.locations = [
      { country: 'España', cities: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'] },
      { country: 'Francia', cities: ['París', 'Marsella', 'Lyon'] },
      { country: 'Italia', cities: ['Roma', 'Milán', 'Florencia'] },
      { country: 'Alemania', cities: ['Berlín', 'Múnich', 'Hamburgo'] },
      { country: 'Portugal', cities: ['Lisboa', 'Oporto'] },
    ];
  }

  startChat() {
    this.addBotMessage('¡Hola! Vamos a planear tu viaje. Escribe el país o ciudad a la que quieres ir:');
  }

  addBotMessage(text: string) {
    this.messages.push({ sender: 'bot', text });
  }

  addUserMessage(text: string) {
    this.messages.push({ sender: 'user', text });
  }

  filterSuggestions() {
    const val = this.userInput.toLowerCase().trim();
    if (!val) {
      this.filteredSuggestions = [];
      return;
    }

    const results: string[] = [];

    for (const loc of this.locations) {
      if (loc.country.toLowerCase().includes(val)) {
        results.push(loc.country);
      }
      for (const city of loc.cities) {
        if (city.toLowerCase().includes(val)) {
          results.push(city);
        }
      }
    }

    this.filteredSuggestions = results.slice(0, 10);
  }

  selectSuggestion(value: string) {
    this.userInput = value;
    this.filteredSuggestions = [];
  }

  isCountry(name: string): boolean {
    return this.locations.some(l => l.country === name);
  }

  sendUserInput() {
    const input = this.userInput.trim();
    if (!input) return;

    this.addUserMessage(input);
    this.sitio = input;
    this.userInput = '';
    this.filteredSuggestions = [];

    // Siguiente paso: fechas
    this.currentOptions = ['2025-10-01','2025-10-15','2025-11-01'];
    this.addBotMessage('Elige la fecha:');
  }

  async selectOption(option: string) {
    this.addUserMessage(option);

    if (!this.fecha) {
      this.fecha = option;
      this.currentOptions = [];
      await this.generateTrip();
    }
  }

  async generateTrip() {
    this.loading = true;
    const prompt = `Quiero viajar a ${this.sitio} en la fecha ${this.fecha || 'no definida'}`;
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
