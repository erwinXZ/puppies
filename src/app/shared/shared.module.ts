import { NgModule } from '@angular/core';
import { FiltersComponent } from '../public/adoption/filters/filters.component';
import { PetTileComponent } from '../public/adoption/pet-tile/pet-tile.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CustomSvgComponent } from './components/custom-svg/custom-svg.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { SharedLibsModule } from './shared-libs.module';
import { EmptyPetListComponent } from './components/pet-list/empty-pet-list/empty-pet-list.component';
import { GenrePipe } from './util/genre.pipe';
import { BirthdayPipe } from './util/birthday.pipe';
import { CustomDatePipe } from './util/custom-date.pipe';
import { TogglePasswordDirective } from './util/toggle-password.directive';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';

@NgModule({
  imports: [SharedLibsModule],
  declarations: [
    GenrePipe,
    BirthdayPipe,
    CustomDatePipe,
    TogglePasswordDirective,
    CarouselComponent,
    CustomModalComponent,
    CustomSvgComponent,
    PetListComponent,
    PetTileComponent,
    FiltersComponent,
    EmptyPetListComponent
  ],
  exports: [
    SharedLibsModule,
    GenrePipe,
    BirthdayPipe,
    CustomDatePipe,
    TogglePasswordDirective,
    CarouselComponent,
    CustomModalComponent,
    CustomSvgComponent,
    PetListComponent,
  ]
})
export class SharedModule { }
