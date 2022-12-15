import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterComponent } from 'src/app/modules/profile/components/register/register.component';
import { ApiService } from 'src/app/shared/service/api.service';


@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  homeSearchForm!: FormGroup;

  ngOnInit() {
    this.homeSearchForm = new FormGroup({
      'jobDescription': new FormControl(null),
      'fullTime': new FormControl(null),
      'partTime': new FormControl(null),
      'userLocation': new FormControl('selectLocation'),
    });
  }

  onHomeSearchFormSubmit() {
    // console.log(this.homeSearchForm.value);
  }

  bsModalRef: BsModalRef | undefined;
  openRegisterModel() {
    this.bsModalRef = this.modalService.show(
      RegisterComponent,
      Object.assign({}, { class: 'gray modal-lg' })
    );

    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
