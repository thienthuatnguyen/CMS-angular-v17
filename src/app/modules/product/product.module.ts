import { NgModule } from '@angular/core';
import { ProductRoutesModule } from './product.routes';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';


@NgModule({
  declarations: [
    ProductPageComponent,
    ProductDetailPageComponent
  ],
  imports: [
    ProductRoutesModule
  ],
  providers: [
  ]
})
export class ProductModule { }



