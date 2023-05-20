import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "**",
    loadChildren: () => import('./not-found/not-found-page/not-found-page.module')
      .then(m => m.NotFoundPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsModuleRoutingModule { }
