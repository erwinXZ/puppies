import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SharedLibsModule } from './shared-libs.module';
import { BooleanTranslatePipe } from './util/boolean-translate';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetTileComponent } from '../public/adoption/pet-tile/pet-tile.component';
import { FiltersComponent } from '../public/adoption/filters/filters.component';
import { EmptyPetListComponent } from './components/pet-list/empty-pet-list/empty-pet-list.component';
@NgModule({
  imports: [SharedLibsModule],
  declarations: [
    BooleanTranslatePipe,
    CarouselComponent,
    PetListComponent,
    PetTileComponent,
    FiltersComponent,
    EmptyPetListComponent
  ],
  exports: [
    SharedLibsModule,
    BooleanTranslatePipe,
    CarouselComponent,
    PetListComponent
  ]
})
export class SharedModule {}
