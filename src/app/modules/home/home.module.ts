import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CreativeRecruitmentComponent } from './components/creative-recruitment/creative-recruitment.component';
import { SearchJobComponent } from './components/search-job/search-job.component';
import { HomeLandingComponent } from './page/home-landing/home-landing.component';
import { PluginsModule } from 'src/app/shared/plugins/plugins.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    CreativeRecruitmentComponent,
    SearchJobComponent,
    HomeLandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    PluginsModule,
    ComponentsModule
  ]
})
export class HomeModule { }
