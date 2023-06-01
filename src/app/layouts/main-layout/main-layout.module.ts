import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsgoLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { SpinerModule } from 'src/app/shared/spiner/spiner.module';
 

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    CsgoLayoutRoutingModule,
    SpinerModule
  ]
})
export class MainLayoutModule { }
