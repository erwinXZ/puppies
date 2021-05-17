import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SharedLibsModule } from './shared-libs.module';
import { BooleanTranslatePipe } from './util/boolean-translate';

@NgModule({
  imports: [
    SharedLibsModule
  ],
  declarations: [
    BooleanTranslatePipe,
    CarouselComponent
  ],
  exports: [
    SharedLibsModule,
    BooleanTranslatePipe,
    CarouselComponent
  ]
})
export class SharedModule { }

