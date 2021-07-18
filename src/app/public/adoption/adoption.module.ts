import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdoptionComponent } from './adoption.component';
import { ADOPTION_ROUTE } from './adoption.route';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetAttributeComponent } from './pet-attribute/pet-attribute.component';

@NgModule({
  declarations: [AdoptionComponent, PetDetailComponent, PetAttributeComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(ADOPTION_ROUTE)
  ]
})
export class AdoptionModule { }
