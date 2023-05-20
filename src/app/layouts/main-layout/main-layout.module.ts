import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsgoLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
 

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    CsgoLayoutRoutingModule,
     
  ]
})
export class MainLayoutModule { }
