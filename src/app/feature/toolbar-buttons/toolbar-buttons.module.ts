import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarButtonsRoutingModule } from './toolbar-buttons-routing.module';
import { ToolbarButtonsComponent } from './toolbar-buttons.component';


@NgModule({
  declarations: [ToolbarButtonsComponent],
  imports: [
    CommonModule,
    ToolbarButtonsRoutingModule
  ],
  exports:[
    ToolbarButtonsComponent
  ]
})
export class ToolbarButtonsModule { }
