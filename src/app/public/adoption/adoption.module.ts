import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdoptionComponent } from './adoption.component';
import { ADOPTION_ROUTE } from './adotion.route';
import { FiltersComponent } from './filters/filters.component';
import { PetTileComponent } from './pet-tile/pet-tile.component';



@NgModule({
  declarations: [AdoptionComponent, FiltersComponent, PetTileComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([ADOPTION_ROUTE])
  ]
})
export class AdoptionModule { }
