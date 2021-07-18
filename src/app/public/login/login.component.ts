import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseErrorsService } from 'src/app/shared/services/firebase-errors.service';
import { UserAuthService } from './user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    rememberMe: [false]
  });
  invalid;
  errorLogin: boolean;
  errorMessage: string;
  isLogin = false;

  constructor(private fb: FormBuilder, private userAuthService: UserAuthService, private router: Router, private firebaseErrorsService: FirebaseErrorsService) { }

  ngOnInit(): void {
  }

  login() {
    this.isLogin = true;
    if (this.loginForm.get('email').valid && this.loginForm.get('password').valid) {
      this.invalid = false;
      this.userAuthService.login(this.loginForm.get('email').value, this.loginForm.get('password').value, this.loginForm.get('rememberMe').value).then(value => {
        console.log('Nice, it worked!', value);
        this.router.navigateByUrl('/association-profile');
      }).catch(err => {
        console.log('Something went wrong: ', err.message);
        this.errorLogin = true;
        this.errorMessage = this.firebaseErrorsService.parseError(err.code);
      });
    } else {
      this.invalid = true;
    }
    this.isLogin = false;
  }

}
