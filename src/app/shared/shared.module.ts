import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanTranslatePipe } from './util/boolean-translate';
import { SharedLibsModule } from './shared-libs.module';



@NgModule({
  imports: [
    SharedLibsModule
  ],
  declarations: [
    BooleanTranslatePipe
  ],
  exports: [
    SharedLibsModule,
    BooleanTranslatePipe
  ]
})
export class SharedModule { }
