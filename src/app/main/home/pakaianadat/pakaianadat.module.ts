import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PakaianadatPageRoutingModule } from './pakaianadat-routing.module';

import { PakaianadatPage } from './pakaianadat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PakaianadatPageRoutingModule
  ],
  declarations: [PakaianadatPage]
})
export class PakaianadatPageModule {}
