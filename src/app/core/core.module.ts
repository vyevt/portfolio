import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { ErrorsModule } from './errors/errors.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CoreRoutingModule,
ErrorsModule
  ]
})
export class CoreModule { }
