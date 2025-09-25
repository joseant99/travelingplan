import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  private apiUrl = environment.apiBaseUrl + '/api/trips/generate';
  async generateTrip(prompt: string): Promise<any> {
    const res = await fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    if (!res.ok) throw new Error('Error en la petición');

    return res.json();
  }
}
