import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './ngx-bootstrap.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBootstrapModule
  ],
  exports:[
    NgxBootstrapModule
  ]
})
export class PluginsModule { }
