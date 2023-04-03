import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../UI/home/home.module').then( m => m.HomeModule),
  },
];

export class AppRoutingModule { }
