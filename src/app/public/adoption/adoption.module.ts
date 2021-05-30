import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdoptionComponent } from './adoption.component';
import { ADOPTION_ROUTE } from './adotion.route';
import { PetTileComponent } from './pet-tile/pet-tile.component';
import { FiltersComponent } from '../../shared/components/filters/filters.component';
import { FilterResultComponent } from '../../shared/components/filter-result/filter-result.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AdoptionComponent,
    FiltersComponent,
    FilterResultComponent,
    PetTileComponent
  ],
  imports: [RouterModule.forChild([ADOPTION_ROUTE]), CommonModule]
})
export class AdoptionModule {}
