import { Routes } from '@angular/router';
import { CustomModalComponent } from 'src/app/shared/components/custom-modal/custom-modal.component';
import { LoginComponent } from './login.component';
import { NewPasswordRequestComponent } from './new-password-request/new-password-request.component';
import { NewPasswordComponent } from './new-password/new-password.component';

export const LOGIN_ROUTES: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'new-password',
		component: NewPasswordComponent
	},
	{
		path: 'new-password/:name',
		component: CustomModalComponent
	},
	{
		path: 'new-password-request',
		component: NewPasswordRequestComponent
	}
];
