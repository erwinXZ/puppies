import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  mode = this.activatedActivated.snapshot.queryParams['mode'];

  setNewPasswordForm = this.fb.group({
    password: [null, [Validators.required]],
    confirmPassword: [null, [Validators.required]]
  });

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder, private activatedActivated: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  setPassword() {
    const password = this.setNewPasswordForm.controls['password'].value;
    const confirmPassword = this.setNewPasswordForm.controls['confirmPassword'].value;

    if (password !== confirmPassword) {
      // react to error
      return;
    }

    const code = this.activatedActivated.snapshot.queryParams['oobCode'];
    this.afAuth
      .confirmPasswordReset(code, password)
      .then(() => this.router.navigate(['login']))
      .catch(err => {
        // const errorMessage = FirebaseErrors.Parse(err.code); // check this helper class at the bottom
      });
  }

  // reset() {}
}
