import { Routes } from '@angular/router';
import { AdoptionComponent } from './adoption.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

export const adoptionRoute: Routes = [
	{
		path: '',
		component: AdoptionComponent
	}, {
		path: ':id/view',
		component: PetDetailComponent
	},
];
