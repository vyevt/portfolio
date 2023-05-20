import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotalVisitsRoutingModule } from './total-visits-routing.module';
import { TotalVisitsComponent } from './total-visits.component';
import { NgChartsModule } from 'ng2-charts';
 
 
@NgModule({
  declarations: [
    TotalVisitsComponent
  ],
  imports: [
    CommonModule,
    TotalVisitsRoutingModule,
    NgChartsModule
  ]
})
export class TotalVisitsModule { }
