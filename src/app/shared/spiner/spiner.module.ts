import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinerRoutingModule } from './spiner-routing.module';
import { SpinerComponent } from './spiner.component';


@NgModule({
  declarations: [
    SpinerComponent
  ],
  imports: [
    CommonModule,
    SpinerRoutingModule
  ],
  exports:[
    SpinerComponent
  ]
})
export class SpinerModule { }
