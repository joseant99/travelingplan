import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-feature-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './feature-page.component.html'
})
export class FeaturePageComponent {
  featureData: any;

  features = {
    vuelos: {
      title: 'Vuelos',
      description: 'Descubre y reserva vuelos fácilmente con nuestra plataforma.Descubre y reserva vuelos fácilmente con nuestra plataforma.Descubre y reserva vuelos fácilmente con nuestra plataforma.Descubre y reserva vuelos fácilmente con nuestra plataforma.Descubre y reserva vuelos fácilmente con nuestra plataforma.Descubre y reserva vuelos fácilmente con nuestra plataforma.',
      benefits: [
        'Comparación de precios en tiempo real',
        'Reservas seguras y rápidas',
        'Ofertas exclusivas para usuarios registrados'
      ]
    },
    transporte: {
      title: 'Transporte',
      description: 'Gestiona todos tus traslados con opciones de bus y taxi.',
      benefits: [
        'Conexiones con múltiples ciudades',
        'Precios transparentes',
        'Confirmación inmediata'
      ]
    },
    excursiones: {
      title: 'Excursiones',
      description: 'Explora actividades únicas y excursiones guiadas.',
      benefits: [
        'Experiencias locales auténticas',
        'Reservas online instantáneas',
        'Cancelación gratuita en muchos tours'
      ]
    },
    hoteles: {
      title: 'Hoteles',
      description: 'Encuentra y reserva hoteles al mejor precio.',
      benefits: [
        'Filtros por precio, ubicación y servicios',
        'Miles de reseñas verificadas',
        'Reservas sin comisión'
      ]
    }
  };

  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {
    const feature = this.route.snapshot.paramMap.get('feature') as keyof typeof this.features;
    this.featureData = this.features[feature];

    if (this.featureData) {
      this.title.setTitle(`${this.featureData.title} | Funciones de nuestra web`);
      this.meta.updateTag({ name: 'description', content: this.featureData.description });
    }
  }
}
