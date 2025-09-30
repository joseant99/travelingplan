import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';NgFor

@Component({
  selector: 'app-icon-card-block',
  standalone: true,
  imports: [MatIconModule, NgFor],
  templateUrl: './icon-card-block.component.html',
  styleUrls: ['./icon-card-block.component.css'],
})
export class IconCardBlockComponent {
  @Input() cards: { icon: string; label: string }[] = [];
}
