import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NEW_PASSWORD_ROUTE } from './new-password.route';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NewPasswordComponent } from './new-password.component';



@NgModule({
  declarations: [
    NewPasswordComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(NEW_PASSWORD_ROUTE)
  ]
})
export class NewPasswordModule { }
