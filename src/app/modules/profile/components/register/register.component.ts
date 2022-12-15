import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { userModel } from 'src/app/shared/model/userModel';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // select list
  intrestedIn = '';
  interestList: string[] = [];

  // Age slider  
  options: Options = {
    floor: 20,
    ceil: 60
  };

  userData: userModel[] = [];

  profile: any;
  currentUser: any;
  editUserData: any;

  constructor(public bsModalRef: BsModalRef, public formBuilder: FormBuilder, private api: ApiService, private router: Router, public _d: DomSanitizer) {
  }

  registerForm!: FormGroup;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'profilePhoto': new FormControl(null),
      'firstName': new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10)]),
      'age': new FormControl('20', [Validators.required]),
      addressDetails: this.formBuilder.group({
        'state': new FormControl(null, [Validators.required]),
        'country': new FormControl(null, [Validators.required]),
        'address': new FormControl(null, [Validators.required]),
        'address1': new FormControl(null, [Validators.required]),
        'address2': new FormControl(null),
      }),
      'interest': new FormControl(null),
      'newsletter': new FormControl(null),
    })


    // this.api.getAllData().subscribe(response => {
    //     if (this.currentUser.id != '' && this.currentUser.id != null) {
    //     this.userData = response;
    //     this.profile = this.userData;
    //     this.currentUser = this.profile[this.profile.length - 1]

    //     this.api.getUserById(this.currentUser.id).subscribe(response => {
    //       this.editUserData = response;

    //       this.registerForm.get('id')?.setValue(this.editUserData.id);
    //       // this.registerForm.get('profilePhoto')?.setValue(this.editUserData.profilePhoto);
    //       this.registerForm.get('firstName')?.setValue(this.editUserData.firstName);
    //       this.registerForm.get('lastName')?.setValue(this.editUserData.lastName);
    //       this.registerForm.get('email')?.setValue(this.editUserData.email);
    //       this.registerForm.get('phone')?.setValue(this.editUserData.phone);
    //       this.registerForm.get('age')?.setValue(this.editUserData.age);
    //       this.registerForm.get('addressDetails.state')?.setValue(this.editUserData.addressDetails.state);
    //       this.registerForm.get('addressDetails.country')?.setValue(this.editUserData.addressDetails.country);
    //       this.registerForm.get('addressDetails.address')?.setValue(this.editUserData.addressDetails.address);
    //       this.registerForm.get('addressDetails.address1')?.setValue(this.editUserData.addressDetails.address1);
    //       this.registerForm.get('addressDetails.address2')?.setValue(this.editUserData.addressDetails.address2);
    //       this.registerForm.get('interest')?.setValue(this.editUserData.interest);
    //       this.registerForm.get('newsletter')?.setValue(this.editUserData.newsletter);
    //     })
    //   }


    // });
  }

  interestInAdd(interest: string) {
    if (interest) {
      this.interestList.push(interest)
    }
  }

  removeInterestTag(interest: string) {
    let arr = this.interestList;
    let index = arr.indexOf(interest);
    if (index > -1) {
      this.interestList.splice(index, 1)
    }
  }

  currentuser: any;
  onRegisterFormSubmit() {
    let values = this.registerForm.value;
    values.interest = this.interestList;

    if (this.registerForm.valid) {
      this.api.createUser(values).subscribe(reponse => {
        this.currentuser = reponse;
        this.api.userDetails.next(this.currentuser.id);
      });

      this.bsModalRef.hide();
      this.router.navigate(['/profile']);

    } else {
      this.validateAllFormFields(this.registerForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  /**** Profile Photo Code Start */
  // url: any;
  // error: any;
  // onProfilePhotoClick() {
  // let reader = new FileReader();
  // if (event.target['files'][0] && event.target['files'][0]) {

  //   reader.readAsDataURL(event.target['files'][0]);

  //   const img = new Image();
  //   img.src = window.URL.createObjectURL(event.target['files'][0])

  //   reader.onload = (event) => {

  //     const width = img.naturalWidth;
  //     const height = img.naturalHeight;
  //     window.URL.revokeObjectURL(img.src);

  //     if (width !== 310 && height !== 325) {
  //       this.error = "Photo should be 310 x 325 size";
  //     }

  //     this.url = reader.result;
  //   }
  // }
  // }

  imgsrc: any = './../../../../../assets/images/avtar.jpg';

  fileChange(e: any) {
    const file = e.srcElement.files[0];
    this.imgsrc = window.URL.createObjectURL(file);
  }
  /**** Profile Photo Code End */

}
