import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTE } from './login.route';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(LOGIN_ROUTE)
  ]
})
export class LoginModule { }
