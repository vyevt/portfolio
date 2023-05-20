import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotalVisitsComponent } from './total-visits.component';

const routes: Routes = [{
  path: "",
  component: TotalVisitsComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotalVisitsRoutingModule { }
