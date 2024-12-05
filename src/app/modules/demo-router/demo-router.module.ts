import { NgModule } from '@angular/core';
import { DemoRoutesModule } from './demo-router.routes';
import { ChildOnePageComponent } from './child-one/child-one-page.component';
import { ChildTwoPageComponent } from './child-two/child-two-page.component';

@NgModule({
  imports: [
    DemoRoutesModule
  ],
  declarations: [
    ChildOnePageComponent,
    ChildTwoPageComponent
  ],
  providers: [
  ]
})
export class DemoRouterModule { }



