import { Component } from '@angular/core';
import { CenteredTitleComponent } from '../../shared/centered-title/centered-title.component';
import { ImageTextBlockComponent } from '../../shared/image-text-block/image-text-block.component';
import { IconCardBlockComponent } from '../../shared/icon-card-block/icon-card-block.component';

@Component({
  selector: 'app-home',
  imports: [CenteredTitleComponent, ImageTextBlockComponent, IconCardBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
