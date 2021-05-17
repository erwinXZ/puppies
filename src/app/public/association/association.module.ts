import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ASSOCIATION_ROUTE } from './association.route';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssociationComponent } from './association.component';
import { AssociationTileComponent } from './association-tile/association-tile.component';

@NgModule({
  declarations: [AssociationComponent, AssociationTileComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([ASSOCIATION_ROUTE])
  ]
})
export class AssociationModule {}
