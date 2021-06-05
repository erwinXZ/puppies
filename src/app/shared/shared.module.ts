import { NgModule } from '@angular/core';
import { FiltersComponent } from '../public/adoption/filters/filters.component';
import { PetTileComponent } from '../public/adoption/pet-tile/pet-tile.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CustomSvgComponent } from './components/custom-svg/custom-svg.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { SharedLibsModule } from './shared-libs.module';
import { BooleanTranslatePipe } from './util/boolean-translate';

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
    PetListComponent,
  ]
})
export class SharedModule { }
