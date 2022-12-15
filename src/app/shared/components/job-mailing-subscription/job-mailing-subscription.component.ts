import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-mailing-subscription',
  templateUrl: './job-mailing-subscription.component.html',
  styleUrls: ['./job-mailing-subscription.component.css']
})
export class JobMailingSubscriptionComponent implements OnInit {

  constructor() { }

  subscribeForm!: FormGroup;

  ngOnInit() {
    this.subscribeForm = new FormGroup({
      'subscribeEmail': new FormControl(null, [Validators.required, Validators.email])
    })
  }

  onSubscribeEmailForm() {
    console.log(this.subscribeForm.value);
  }

}
