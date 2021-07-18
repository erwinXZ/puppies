import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseErrorsService } from 'src/app/shared/services/firebase-errors.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  mode = this.activatedActivated.snapshot.queryParams['mode'];

  setNewPasswordForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]]
  });
  errorMessage: string;

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder, private activatedActivated: ActivatedRoute, private router: Router, private firebaseErrorsService: FirebaseErrorsService) { }

  ngOnInit(): void {
  }

  resetPassword() {
    const password = this.setNewPasswordForm.controls['password'].value;
    const confirmPassword = this.setNewPasswordForm.controls['confirmPassword'].value;

    if (password !== confirmPassword) {
      this.errorMessage = 'Las contraseñas deben ser iguales';
      return;
    } else {
      this.errorMessage = undefined;
    }

    const code = this.activatedActivated.snapshot.queryParams['oobCode'];
    this.afAuth
      .confirmPasswordReset(code, password)
      .then(() => this.router.navigate(['/new-password', 'reset-password-completed']))
      .catch(err => {
        this.errorMessage = this.firebaseErrorsService.parseError(err.code);
      });
  }
}
