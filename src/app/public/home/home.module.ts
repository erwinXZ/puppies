import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HOME_ROUTE } from './home.route';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([HOME_ROUTE])
  ]
})
export class HomeModule { }
