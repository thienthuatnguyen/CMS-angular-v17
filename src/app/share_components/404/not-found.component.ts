import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-not-found',
    template: `
    <div class="content-container">
      <div class="content-title-group not-found">
        <i class="fas fa-exclamation-triangle" aria-hidden="true"></i> &nbsp;
        <span class="title">404 page</span>
      </div>
    </div>
  `,
    standalone: true,
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
