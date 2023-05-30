import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { MainLayoutComponent } from './main-layout.component';
import { ProfileCardComponent } from 'src/app/feature/user-profile/profile-card/profile-card.component';
import { TaskComponent } from 'src/app/feature/task/task.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
     
       
      {
        path: 'user-card',
         component:ProfileCardComponent,
        outlet: 'user_card'
      },
      {
        path: 'user-task',
        component:TaskComponent,
        outlet: 'user_task'
      }
      //{path: <base-path>, component: <component>, outlet: <target_outlet_name>}
      ,

      {
        path: 'toolbar_open',
        loadChildren: () => import('../../feature/toolbar-buttons/toolbar-buttons.module')
          .then(m => m.ToolbarButtonsModule),
        outlet: 'toolbar'
      }
      //{path: <base-path>, component: <component>, outlet: <target_outlet_name>}
      ,

      {
        path: 'stats',
        loadChildren: () => import('../../feature/stats/stats.module')
          .then(m => m.StatsModule),
        outlet: 'stats'
      } ,
      {
        path: 'visits',
        loadChildren: () => import('../../feature/total-visits/total-visits.module')
          .then(m => m.TotalVisitsModule),
        outlet: 'visits'
      } ,
      {
        path: 'settings',
        loadChildren: () => import('../../feature/setting-table/setting-table.module')
          .then(m => m.SettingTableModule),
        outlet: 'settings'
      } ,
      
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsgoLayoutRoutingModule { }
