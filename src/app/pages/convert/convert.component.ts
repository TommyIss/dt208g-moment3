import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {
  // Inputsvärde
  length: number = 0;
  temp: number = 0;
  result: number = 0;
  unit: string = '';
  // Metoder
  feetToMeter() {
    this.result = this.length*0.3048;
    this.unit = 'meter';
  }
  meterToFeet(): void {
    this.result = this.length*3.28084;
    this.unit = 'fot';
  }
  fahrenheitToCelsius(): void {
    this.result = (this.temp - 32) * 5/9;
    this.unit = '°C';
  }
  celeciusToFahrenhei(): void {
    this.result = (this.temp * (9/5)) + 32;
    this.unit = '°F'; 
  }
}
