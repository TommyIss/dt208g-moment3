import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // openBtn = document.getElementById('open-btn') as HTMLButtonElement;
  // closeBtn = document.getElementById('close-btn') as HTMLButtonElement;
  // navMenu = document.getElementById('nav-menu') as HTMLDivElement;
  // @ViewChild('open-btn') openBtn!: ElementRef<HTMLButtonElement>;
  // @ViewChild('close-btn') closeBtn!: ElementRef<HTMLButtonElement>;
  // @ViewChild('nav-menu') navMenu!: ElementRef<HTMLDivElement>;

  // ngAfterViewInit(): void {
  //   if (!this.openBtn) {
  //     console.error(`${this.openBtn} saknas!`);
      
  //   } else if(!this.closeBtn) {
  //     console.error(`${this.closeBtn} saknas!`);
  //   } {
  //     this.openBtn.nativeElement.addEventListener('click', this.menuToggle.bind(this));
  //     this.closeBtn.nativeElement.addEventListener('click', this.menuToggle.bind(this));
  //   }
  // }

  // menuToggle(): void {
  //   if (!this.navMenu) {
  //     console.error('navMenu saknas');
      
  //   }
    
  //   let style = window.getComputedStyle(this.navMenu.nativeElement);

  //   if(style.display === 'none') {
  //   this.navMenu.nativeElement.style.display = 'block';
  // } else {
  //   this.navMenu.nativeElement.style.display = 'none';
  // }
  // }
  
}

// Variabler


// if(openBtn || closeBtn || navMenu) {
//   openBtn.addEventListener('click', menuToggle);
//   closeBtn.addEventListener('click', menuToggle);
// } else {
//   console.error('Ett eller flera element hittades inte.');
// }



// function menuToggle() {
//   let style = window.getComputedStyle(navMenu);

//   console.log(style);
//   // if(style.display === 'none') {
//   //   navMenu.style.display = 'block';
//   // } else {
//   //   navMenu.style.display = 'none';
//   // }

// }

if (window.matchMedia('(max-width: 800px)').matches) {
  console.log('Skräm är mindre än 800px!');
} else {
  console.log('Skärm är större än 800px!');
}