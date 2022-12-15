import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobMailingSubscriptionComponent } from './job-mailing-subscription/job-mailing-subscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PluginsModule } from '../plugins/plugins.module';

@NgModule({
  declarations: [
    JobMailingSubscriptionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PluginsModule,
  ],
  exports: [
    JobMailingSubscriptionComponent,
  ]
})
export class ComponentsModule { }
