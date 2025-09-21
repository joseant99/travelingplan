import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  private baseUrl = 'http://localhost:3000/trips/generate';
  async generateTrip(prompt: string): Promise<any> {
    const res = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    if (!res.ok) throw new Error('Error en la petición');

    return res.json();
  }
}
