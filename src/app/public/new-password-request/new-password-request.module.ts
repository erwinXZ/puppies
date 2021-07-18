import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NEW_PASSWORD_REQUEST_ROUTE } from './new-password-request.route';
import { NewPasswordRequestComponent } from './new-password-request.component';

@NgModule({
  declarations: [
    NewPasswordRequestComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(NEW_PASSWORD_REQUEST_ROUTE)
  ]
})
export class NewPasswordRequestModule { }
