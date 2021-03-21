import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    NgbModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class SharedLibsModule { }
