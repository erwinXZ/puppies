import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CustomSvgComponent } from './components/custom-svg/custom-svg.component';
import { SharedLibsModule } from './shared-libs.module';
import { BooleanTranslatePipe } from './util/boolean-translate';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetTileComponent } from '../public/adoption/pet-tile/pet-tile.component';
import { FiltersComponent } from '../public/adoption/filters/filters.component';
@NgModule({
  imports: [SharedLibsModule],
  declarations: [
    BooleanTranslatePipe,
    CarouselComponent,
    CustomSvgComponent,
    PetListComponent,
    PetTileComponent,
    FiltersComponent
  ],
  exports: [
    SharedLibsModule,
    BooleanTranslatePipe,
    CarouselComponent,
    CustomSvgComponent,
    PetListComponent
  ]
})
export class SharedModule { }
