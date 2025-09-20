import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  private baseUrl = 'https://friendly-carnival-7pprrj6pw63r9vj-3000.app.github.dev/trips/generate';
  async generateTrip(prompt: string): Promise<any> {
    const res = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
      mode: 'no-cors'
    });

    if (!res.ok) throw new Error('Error en la petición');

    return res.json();
  }
}
