import { NgModule } from '@angular/core';
import { HomeRoutesModule } from './home.routes';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomeRoutesModule
  ],
  providers: [
  ]
})
export class HomeModule { }



