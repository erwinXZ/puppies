import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdoptionComponent } from './adoption.component';
import { ADOPTION_ROUTE } from './adotion.route';
import { PetTileComponent } from './pet-tile/pet-tile.component';



@NgModule({
  declarations: [AdoptionComponent, PetTileComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([ADOPTION_ROUTE])
  ]
})
export class AdoptionModule { }
