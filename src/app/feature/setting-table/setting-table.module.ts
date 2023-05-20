import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingTableRoutingModule } from './setting-table-routing.module';
import { SettingTableComponent } from './setting-table.component';


@NgModule({
  declarations: [
    SettingTableComponent
  ],
  imports: [
    CommonModule,
    SettingTableRoutingModule
  ]
})
export class SettingTableModule { }
