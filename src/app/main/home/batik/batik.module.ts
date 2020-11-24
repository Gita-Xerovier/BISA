import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatikPageRoutingModule } from './batik-routing.module';

import { BatikPage } from './batik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatikPageRoutingModule
  ],
  declarations: [BatikPage]
})
export class BatikPageModule {}
