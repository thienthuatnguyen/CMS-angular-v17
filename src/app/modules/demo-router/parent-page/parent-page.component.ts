import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'parent-page',
  templateUrl: './parent-page.component.html',
  styleUrls: ['./parent-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ParentPageComponent {
}


//Emulated not effect style to child component 

//None effect style to child component 