import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ASSOCIATION_DETAIL_ROUTE,
  ASSOCIATION_ROUTE
} from './association.route';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssociationComponent } from './association.component';
import { AssociationTileComponent } from './association-tile/association-tile.component';
import { AssociationDetailComponent } from './association-detail/association-detail.component';
import { CounterComponent } from './association-detail/counter/counter.component';

@NgModule({
  declarations: [
    AssociationComponent,
    AssociationTileComponent,
    AssociationDetailComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([ASSOCIATION_ROUTE, ASSOCIATION_DETAIL_ROUTE])
  ]
})
export class AssociationModule {}
