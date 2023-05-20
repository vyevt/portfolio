import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingTableComponent } from './setting-table.component';

const routes: Routes = [  {
  path: "",
  component: SettingTableComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingTableRoutingModule { }
