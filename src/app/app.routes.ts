import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './share_components/404/not-found.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadChildren: () =>
  //     import('./features/home/home.module').then((m) => m.HomeModule),
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () =>
  //     import('./features/profile/profile.module').then((m) => m.ProfileModule),
  // },
  // {
  //   path: 'public',
  //   loadChildren: () =>
  //     import('./features/public/public.module').then((m) => m.PublicModule),
  // },
  // {
  //   path: 'protected',
  //   loadChildren: () =>
  //     import('./features/protected/protected.module').then(
  //       (m) => m.ProtectedModule
  //     ),
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./features/admin/admin.module').then((m) => m.AdminModule),
  // },
  // {
  //   path: 'callback',
  //   loadChildren: () =>
  //     import('./features/callback/callback.module').then(
  //       (m) => m.CallbackModule
  //     ),
  // },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
