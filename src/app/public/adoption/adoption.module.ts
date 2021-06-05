import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdoptionComponent } from './adoption.component';
import { ADOPTION_ROUTE } from './adoption.route';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

@NgModule({
  declarations: [AdoptionComponent, PetDetailComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ADOPTION_ROUTE)
  ]
})
export class AdoptionModule { }
