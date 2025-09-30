import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-centered-title',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink, NgIf],
  templateUrl: './centered-title.component.html',
  styleUrls: ['./centered-title.component.css'],
})
export class CenteredTitleComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() buttonText?: string;
  @Input() buttonLink?: string;
}
