import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatikPage } from './batik.page';

const routes: Routes = [
  {
    path: '',
    component: BatikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatikPageRoutingModule {}
