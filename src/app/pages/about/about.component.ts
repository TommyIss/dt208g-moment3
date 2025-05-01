import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  imagePath: string = 'images/research.jpg';
  imagePath1: string = 'images/research.jpg?as=avif';
  imagePath2: string = 'images/research.jpg?as=webp';
}
