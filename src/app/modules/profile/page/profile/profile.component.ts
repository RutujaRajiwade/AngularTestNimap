import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { userModel } from 'src/app/shared/model/userModel';
import { ApiService } from 'src/app/shared/service/api.service';
import { RegisterComponent } from '../../components/register/register.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData: userModel[] = [];

  profile: any;
  currentUser: any;
  editUserData: any;

  constructor(private modalService: BsModalService, private api: ApiService) { }

  ngOnInit() {
    this.loadAllData();

    // if (this.currentUser.id = '' && this.currentUser.id != null) {
    //   this.api.getUserById(this.currentUser.id).subscribe(response => {
    //     this.editUserData = response;
    //   })
    // }
  }

  bsModalRef!: BsModalRef;
  openRegisterModel(id: any) {
    this.bsModalRef = this.modalService.show(
      RegisterComponent,
      Object.assign({ class: 'gray modal-lg', initialState: this.currentUser })
    );
    this.bsModalRef.hide();
  }

  loadAllData() {
    this.api.getAllData().subscribe(response => {
      this.userData = response;
      this.profile = this.userData;
      this.currentUser = this.profile[this.profile.length - 1]
    });
  }

  editUser(id: any) {
    this.openRegisterModel(id);
  }

}

