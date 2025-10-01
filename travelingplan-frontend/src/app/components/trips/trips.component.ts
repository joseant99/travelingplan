import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForOf, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripsService } from '../../services/trips.service';
import { TravelWizardComponent } from '../../pages/travel-wizard/travel-wizard.component';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf, FormsModule, TravelWizardComponent],
  templateUrl: './trips.component.html',
})
export class TripsComponent implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  messages: Message[] = [];
  loading = false;

  chatPrompt = '';

  constructor(private tripsService: TripsService) {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.messagesContainer) {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    }
  }

  addBotMessage(text: string) {
    this.messages.push({ sender: 'bot', text });
  }

  addUserMessage(text: string) {
    this.messages.push({ sender: 'user', text });
  }

  receivePrompt(prompt: string) {
    this.chatPrompt = prompt;
    this.addBotMessage('¡Perfecto! Vamos a planear tu viaje basado en tu selección:');
    this.addBotMessage(this.chatPrompt);
    this.generateTrip();
  }

  async generateTrip() {
    if (!this.chatPrompt) return;
    this.loading = true;
    try {
      const result = await this.tripsService.generateTrip(this.chatPrompt);
      this.addBotMessage(`¡Listo! Aquí tienes tu viaje:\n${JSON.stringify(result)}`);
    } catch (err) {
      this.addBotMessage(`Error: ${(err as Error).message}`);
    } finally {
      this.loading = false;
    }
  }
}
