import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoStorePageComponent } from './demo-store-page/demo-store-page.component';


export const routes: Routes = [
  {
    path: '', component: DemoStorePageComponent,
    title: 'demo store page',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoStoreRoutesModule { }


// reade more at: https://angular.dev/guide/routing/router-reference#router-terminology