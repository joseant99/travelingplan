import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class TripsService {
  private GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  async generateTrip(prompt: string) {
    try {
      // Crear instancia del SDK con tu API key
      const ai = new GoogleGenAI({ apiKey: this.GEMINI_API_KEY });

      // Llamar al modelo gemini-2.0-flash-001
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-001',
        contents: prompt,
      });

      // Procesar la respuesta: los modelos de Gemini devuelven "parts"
      const partsArray = response?.candidates?.[0]?.content?.parts;
      const text = Array.isArray(partsArray)
        ? partsArray.map((part: any) => (typeof part === 'string' ? part : part?.text ?? '')).join(' ')
        : 'No se pudo generar la guía';

      return { guide: text };
    } catch (error) {
      console.error('Error generando guía:', error);
      return { guide: 'Error en la generación' };
    }
  }
}
