import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'batik',
    loadChildren: () => import('./batik/batik.module').then( m => m.BatikPageModule)
  },  {
    path: 'pakaianadat',
    loadChildren: () => import('./pakaianadat/pakaianadat.module').then( m => m.PakaianadatPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
