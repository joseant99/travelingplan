import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-image-text-block',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './image-text-block.component.html',
  styleUrls: ['./image-text-block.component.css']
})
export class ImageTextBlockComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonText?: string;
  @Input() buttonLink?: string;
  @Input() imageUrl: string = '';
  @Input() imageLeft: boolean = true; // si true imagen a la izquierda, si false a la derecha
}
