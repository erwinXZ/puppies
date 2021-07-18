import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-password-request',
  templateUrl: './new-password-request.component.html',
  styleUrls: ['./new-password-request.component.scss']
})
export class NewPasswordRequestComponent implements OnInit {

  passwordResetRequestForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]]
  });

  formSubmitted = false;

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  sendPasswordResetRequest() {
    const email = this.passwordResetRequestForm.controls['email'].value;

    this.afAuth.sendPasswordResetEmail(email).then(
      () => {
        // success, show some message
        this.formSubmitted = true;
      },
      err => {
        // handle errors
      }
    );
  }
}
