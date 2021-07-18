import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';
import { LOGIN_ROUTES } from './login.route';
import { NewPasswordRequestComponent } from './new-password-request/new-password-request.component';
import { NewPasswordComponent } from './new-password/new-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    NewPasswordComponent,
    NewPasswordRequestComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(LOGIN_ROUTES)
  ]
})
export class LoginModule { }
