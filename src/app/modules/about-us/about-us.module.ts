import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsLandingComponent } from './page/about-us-landing/about-us-landing.component';


@NgModule({
  declarations: [
  
    AboutUsLandingComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
