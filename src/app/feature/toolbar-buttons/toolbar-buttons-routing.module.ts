import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarButtonsComponent } from './toolbar-buttons.component';

const routes: Routes = [
  {
    path: "",
    component: ToolbarButtonsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolbarButtonsRoutingModule { }
