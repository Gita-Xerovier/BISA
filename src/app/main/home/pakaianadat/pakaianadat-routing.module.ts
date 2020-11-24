import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PakaianadatPage } from './pakaianadat.page';

const routes: Routes = [
  {
    path: '',
    component: PakaianadatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PakaianadatPageRoutingModule {}
