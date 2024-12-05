import { Component, ViewEncapsulation } from '@angular/core';
import { NoEncapsulationComponent } from '../../../share_components/test-encapsulation/no-encapsulation.component';

@Component({
  standalone: true,
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [NoEncapsulationComponent],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomePageComponent {
}


//Emulated not effect style to child component 

//None effect style to child component 