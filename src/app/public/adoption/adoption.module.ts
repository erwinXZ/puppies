import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdoptionComponent } from './adoption.component';
import { ADOPTION_ROUTE } from './adoption.route';
import { FiltersComponent } from './filters/filters.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetImagesComponent } from './pet-images/pet-images.component';
import { PetTileComponent } from './pet-tile/pet-tile.component';



@NgModule({
  declarations: [AdoptionComponent, PetTileComponent, FiltersComponent, PetDetailComponent, PetImagesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(ADOPTION_ROUTE)
  ]
})
export class AdoptionModule { }
