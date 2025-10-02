import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Country {
  country: string;
  flag: string;
  cities: string[];
}

interface Option {
  type: 'country' | 'city';
  name: string;
  flag: string;
  country?: string;
}

@Component({
  selector: 'app-travel-wizard',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf],
  templateUrl: './travel-wizard.component.html',
})
export class TravelWizardComponent implements OnInit {
  @Output() wizardCompleted = new EventEmitter<string>();
  step = 1;

  // Lista de países con ciudades y banderas
  countries: Country[] = [
    {
      "country": "Francia",
      "flag": "https://flagcdn.com/24x18/fr.png",
      "cities": ["París", "Niza", "Lyon", "Marsella", "Burdeos", "Estrasburgo", "Toulouse"]
    },
    {
      "country": "España",
      "flag": "https://flagcdn.com/24x18/es.png",
      "cities": ["Madrid", "Barcelona", "Sevilla", "Valencia", "Granada", "Bilbao"]
    },
    {
      "country": "Estados Unidos",
      "flag": "https://flagcdn.com/24x18/us.png",
      "cities": ["Nueva York", "Los Ángeles", "Las Vegas", "San Francisco", "Miami", "Chicago", "Boston", "Washington D.C."]
    },
    {
      "country": "Italia",
      "flag": "https://flagcdn.com/24x18/it.png",
      "cities": ["Roma", "Venecia", "Florencia", "Milán", "Nápoles", "Turín"]
    },
    {
      "country": "Reino Unido",
      "flag": "https://flagcdn.com/24x18/gb.png",
      "cities": ["Londres", "Edimburgo", "Manchester", "Liverpool", "Oxford"]
    },
    {
      "country": "México",
      "flag": "https://flagcdn.com/24x18/mx.png",
      "cities": ["Ciudad de México", "Cancún", "Guadalajara", "Monterrey", "Puerto Vallarta", "Oaxaca", "Playa del Carmen"]
    },
    {
      "country": "Tailandia",
      "flag": "https://flagcdn.com/24x18/th.png",
      "cities": ["Bangkok", "Chiang Mai", "Phuket", "Krabi", "Pattaya"]
    },
    {
      "country": "Japón",
      "flag": "https://flagcdn.com/24x18/jp.png",
      "cities": ["Tokio", "Kioto", "Osaka", "Hiroshima", "Nara", "Sapporo"]
    },
    {
      "country": "Alemania",
      "flag": "https://flagcdn.com/24x18/de.png",
      "cities": ["Berlín", "Múnich", "Hamburgo", "Colonia", "Fráncfort", "Dresde"]
    },
    {
      "country": "Países Bajos",
      "flag": "https://flagcdn.com/24x18/nl.png",
      "cities": ["Ámsterdam", "Róterdam", "La Haya", "Utrecht"]
    },
    {
      "country": "Australia",
      "flag": "https://flagcdn.com/24x18/au.png",
      "cities": ["Sídney", "Melbourne", "Brisbane", "Perth", "Adelaida"]
    },
    {
      "country": "Brasil",
      "flag": "https://flagcdn.com/24x18/br.png",
      "cities": ["Río de Janeiro", "São Paulo", "Salvador", "Brasilia", "Florianópolis"]
    },
    {
      "country": "Argentina",
      "flag": "https://flagcdn.com/24x18/ar.png",
      "cities": ["Buenos Aires", "Córdoba", "Mendoza", "Rosario"]
    },
    {
      "country": "Egipto",
      "flag": "https://flagcdn.com/24x18/eg.png",
      "cities": ["El Cairo", "Lúxor", "Alejandría", "Sharm el-Sheij"]
    },
    {
      "country": "India",
      "flag": "https://flagcdn.com/24x18/in.png",
      "cities": ["Nueva Delhi", "Mumbai", "Agra", "Jaipur", "Varanasi"]
    },
    {
      "country": "Indonesia",
      "flag": "https://flagcdn.com/24x18/id.png",
      "cities": ["Bali", "Yakarta", "Yogyakarta", "Surabaya"]
    },
    {
      "country": "Malasia",
      "flag": "https://flagcdn.com/24x18/my.png",
      "cities": ["Kuala Lumpur", "Penang", "Langkawi"]
    },
    {
      "country": "Emiratos Árabes Unidos",
      "flag": "https://flagcdn.com/24x18/ae.png",
      "cities": ["Dubái", "Abu Dabi", "Sharjah"]
    },
    {
      "country": "Sudáfrica",
      "flag": "https://flagcdn.com/24x18/za.png",
      "cities": ["Ciudad del Cabo", "Johannesburgo", "Durban"]
    },
    {
      "country": "Grecia",
      "flag": "https://flagcdn.com/24x18/gr.png",
      "cities": ["Atenas", "Santorini", "Mykonos", "Tesalónica"]
    },
    {
      "country": "Portugal",
      "flag": "https://flagcdn.com/24x18/pt.png",
      "cities": ["Lisboa", "Oporto", "Funchal"]
    },
    {
      "country": "Vietnam",
      "flag": "https://flagcdn.com/24x18/vn.png",
      "cities": ["Hanói", "Ho Chi Minh", "Hué", "Hội An"]
    },
    {
      "country": "Corea del Sur",
      "flag": "https://flagcdn.com/24x18/kr.png",
      "cities": ["Seúl", "Busán", "Incheon"]
    },
    {
      "country": "Chile",
      "flag": "https://flagcdn.com/24x18/cl.png",
      "cities": ["Santiago", "Valparaíso", "Viña del Mar", "San Pedro de Atacama"]
    },
    {
      "country": "Perú",
      "flag": "https://flagcdn.com/24x18/pe.png",
      "cities": ["Lima", "Cusco", "Arequipa", "Iquitos"]
    },
    {
      "country": "Colombia",
      "flag": "https://flagcdn.com/24x18/co.png",
      "cities": ["Bogotá", "Medellín", "Cartagena", "Cali"]
    },
    {
      "country": "Honduras",
      "flag": "https://flagcdn.com/24x18/hn.png",
      "cities": ["Tegucigalpa", "San Pedro Sula"]
    },
    {
      "country": "Costa Rica",
      "flag": "https://flagcdn.com/24x18/cr.png",
      "cities": ["San José", "Liberia", "Alajuela"]
    },
    {
      "country": "Panamá",
      "flag": "https://flagcdn.com/24x18/pa.png",
      "cities": ["Ciudad de Panamá", "David"]
    },
    {
      "country": "Singapur",
      "flag": "https://flagcdn.com/24x18/sg.png",
      "cities": ["Singapur"]
    }
  ];

  selectedCountry: Country | null = null;
  selectedCity: string | null = null;
  searchText = '';

  allOptions: Option[] = [];
  filteredOptions: Option[] = [];

  ngOnInit() {
    this.buildOptions();
  }

  // Construye el array combinado de países y ciudades
  buildOptions() {
    this.allOptions = [];
    this.countries.forEach(c => {
      this.allOptions.push({ type: 'country', name: c.country, flag: c.flag });
      c.cities.forEach(city => {
        this.allOptions.push({ type: 'city', name: city, flag: c.flag, country: c.country });
      });
    });
  }

  // Filtra las opciones según el texto escrito
  filterOptions() {
    const q = this.searchText.toLowerCase();
    this.filteredOptions = [];

    this.countries.forEach(c => {
      if (c.country.toLowerCase().includes(q)) {
        this.filteredOptions.push({ type: 'country', name: c.country, flag: c.flag });
        c.cities.forEach(city => {
          this.filteredOptions.push({ type: 'city', name: city, flag: c.flag, country: c.country });
        });
      } else {
        c.cities.forEach(city => {
          if (city.toLowerCase().includes(q)) {
            this.filteredOptions.push({ type: 'city', name: city, flag: c.flag, country: c.country });
          }
        });
      }
    });
  }

  // Selecciona opción de la lista
  selectOption(option: Option) {
    if (option.type === 'city') {
      this.selectedCity = option.name;
      this.selectedCountry = this.countries.find(c => c.country === option.country) || null;
    } else {
      this.selectedCountry = this.countries.find(c => c.country === option.name) || null;
      this.selectedCity = null;
    }
    this.searchText = option.name;
    this.filteredOptions = [];
  }

  // Número de días
  days = 3;
  incrementDays() { this.days++; }
  decrementDays() { if (this.days > 1) this.days--; }
  validateDays(value: number) { this.days = value < 1 || isNaN(value) ? 1 : Math.floor(value); }

  // Estilo e intereses
  styles = ['Económico', 'Lujo', 'Familiar', 'Aventura', 'Relax'];
  selectedStyle = '';
  interests = ['Arte', 'Gastronomía', 'Naturaleza', 'Historia', 'Fiesta'];
  selectedInterests: string[] = [];

  toggleInterest(interest: string) {
    this.selectedInterests = this.selectedInterests.includes(interest)
      ? this.selectedInterests.filter(i => i !== interest)
      : [...this.selectedInterests, interest];
  }

  // Navegación de pasos
  nextStep() {
    if (this.step === 4) {
      // Si no hay selección y hay texto, usar texto como país
      if (!this.selectedCountry && !this.selectedCity && this.searchText.trim() !== '') {
        this.selectedCountry = { country: this.searchText.trim(), flag: '', cities: [] };
      }
      this.completeWizard();
    } else {
      this.step++;
    }
  }

  prevStep() { if (this.step > 1) this.step--; }

  completeWizard() {
    const location = this.selectedCity
      ? `${this.selectedCity} (${this.selectedCountry?.country})`
      : this.selectedCountry
      ? this.selectedCountry.country
      : this.searchText;

    const prompt = `Crea una guía de viaje de ${this.days} días en ${location}, estilo ${this.selectedStyle}, incluyendo: ${this.selectedInterests.join(', ')}. Si sobra tiempo, sugiere visitar pueblos o ciudades cercanas al lugar elegido.`;

    this.wizardCompleted.emit(prompt);
  }
}
