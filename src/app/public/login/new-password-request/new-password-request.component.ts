import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseErrorsService } from 'src/app/shared/services/firebase-errors.service';

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
  errorMessage: string;

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder, private firebaseErrorsService: FirebaseErrorsService) { }

  ngOnInit(): void {
  }

  sendPasswordResetRequest() {
    const email = this.passwordResetRequestForm.controls['email'].value;

    this.afAuth.sendPasswordResetEmail(email).then(
      () => {
        this.formSubmitted = true;
      }, err => {
        this.errorMessage = this.firebaseErrorsService.parseError(err.code);
      }
    );
  }
}
