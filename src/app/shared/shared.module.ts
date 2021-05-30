import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CustomSvgComponent } from './components/custom-svg/custom-svg.component';
import { SharedLibsModule } from './shared-libs.module';
import { BooleanTranslatePipe } from './util/boolean-translate';

@NgModule({
  imports: [
    SharedLibsModule
  ],
  declarations: [
    BooleanTranslatePipe,
    CarouselComponent,
    CustomSvgComponent
  ],
  exports: [
    SharedLibsModule,
    BooleanTranslatePipe,
    CarouselComponent,
    CustomSvgComponent
  ]
})
export class SharedModule { }

