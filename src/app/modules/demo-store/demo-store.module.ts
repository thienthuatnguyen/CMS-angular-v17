import { NgModule } from '@angular/core';
import { DemoStorePageComponent } from './demo-store-page/demo-store-page.component';
import { DemoStoreRoutesModule } from './demo-store.routes';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { taskReducer } from '../../store/reducers/task.reducer';

@NgModule({
  imports: [
    DemoStoreRoutesModule,
    StoreModule.forRoot({tasks: taskReducer}),
    CommonModule
  ],
  declarations: [
    DemoStorePageComponent
  ],
  providers: [
  ]
})
export class DemoStoreModule { }



