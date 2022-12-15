import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsLandingComponent } from './page/about-us-landing/about-us-landing.component';

const routes: Routes = [{ path: '', component: AboutUsLandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
