import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';


export const routes: Routes = [
  { path: '', component: ProductPageComponent },
  { path: 'detail/:id', component: ProductDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutesModule { }
