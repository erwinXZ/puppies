import { NgModule } from '@angular/core';
import { BooleanTranslatePipe } from './util/boolean-translate';
import { SharedLibsModule } from './shared-libs.module';
import { CustomSvgComponent } from './components/custom-svg/custom-svg.component';

@NgModule({
  imports: [
    SharedLibsModule
  ],
  declarations: [
    BooleanTranslatePipe,
  ],
  exports: [
    SharedLibsModule,
    BooleanTranslatePipe
  ]
})
export class SharedModule { }

