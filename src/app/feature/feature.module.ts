import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
 import { FeatureRoutingModule } from './feature-routing.module';
import { CsgoModule } from './csgo/csgo.module';
import { Tf2Module } from './tf2/tf2.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    HomeModule,
    CsgoModule,
    Tf2Module,


  ]
})
export class FeatureModule { }
