import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, JsonPipe, NgClass  } from '@angular/common';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-trips',
  standalone: true, // 🔑 componente standalone
  imports: [FormsModule, NgIf, JsonPipe, NgClass ],
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
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
