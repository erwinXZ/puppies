import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdoptionComponent } from './adoption.component';
import { ADOPTION_ROUTE } from './adotion.route';
import { PetTileComponent } from './pet-tile/pet-tile.component';
import { FiltersComponent } from './filters/filters.component';



@NgModule({
  declarations: [AdoptionComponent, PetTileComponent, FiltersComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([ADOPTION_ROUTE])
  ]
})
export class AdoptionModule { }
