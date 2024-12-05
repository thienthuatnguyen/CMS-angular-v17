import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-no-encapsulation',
    template: `
      <h2>None</h2>
      <div class="none-message">No encapsulation</div>
    `,
    styleUrls: ['./no-encapsulation.component.scss'],
    encapsulation: ViewEncapsulation.None,
  })
  export class NoEncapsulationComponent {}