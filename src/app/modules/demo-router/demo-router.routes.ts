import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentPageComponent } from './parent-page/parent-page.component';
import { ChildOnePageComponent } from './child-one/child-one-page.component';
import { ChildTwoPageComponent } from './child-two/child-two-page.component';


export const routes: Routes = [
  {
    path: '', component: ParentPageComponent,
    title: 'parent page',
  },
  {
    path: 'child-one', // child route path
    component: ChildOnePageComponent, // child route component that the router renders}
  },
  {
    path: 'child-two',
    component: ChildTwoPageComponent, // another child route component that the router renders
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutesModule { }


// reade more at: https://angular.dev/guide/routing/router-reference#router-terminology