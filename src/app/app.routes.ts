import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './share_components/404/not-found.component';
import { isAuthenticatedGuard } from './core';
import { authLoadGuard } from './core/guards/auth-load.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'product',
    loadChildren: () =>
    import('./modules/product/product.module').then((m) => m.ProductModule),
    canActivate: [isAuthenticatedGuard],
  },

  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/routes').then((m) => m.routes),
  //   canMatch: [authLoadGuard],
  //   // data: { preload: true },
  // },

  
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
