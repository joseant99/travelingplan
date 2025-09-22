import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface IconCard {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-icon-card-block',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './icon-card-block.component.html',
  styleUrls: ['./icon-card-block.component.css']
})
export class IconCardBlockComponent {
  @Input() cards: IconCard[] = [];
}
