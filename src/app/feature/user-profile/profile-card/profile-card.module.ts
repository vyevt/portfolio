import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileCardRoutingModule } from './profile-card-routing.module';
import { ProfileCardComponent } from './profile-card.component';


@NgModule({
  declarations: [
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    ProfileCardRoutingModule
  ]
})
export class ProfileCardModule { }
