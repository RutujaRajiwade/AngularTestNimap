import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [],
  exports: [
    ModalModule
  ],
  providers: [BsModalRef],
})
export class NgxBootstrapModule { }
