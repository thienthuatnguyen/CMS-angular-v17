import { NgModule } from '@angular/core';
import { AuthRoutesModule } from './auth.routes';
import { SignInComponent } from './signin-page/signin-page.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    AuthRoutesModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
  ]
})
export class AuthModule { }



