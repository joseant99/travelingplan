import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-image-text-block',
  standalone: true,
  imports: [MatButtonModule, RouterLink, NgClass],
  templateUrl: './image-text-block.component.html',
  styleUrls: ['./image-text-block.component.css'],
})
export class ImageTextBlockComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() imageUrl!: string;
  @Input() imageLeft: boolean = true;
  @Input() buttonText?: string;
  @Input() buttonLink?: string;
}
