import { Route, Routes } from '@angular/router';
import { AssociationDetailComponent } from './association-detail/association-detail.component';
import { AssociationComponent } from './association.component';

const routes: Routes = [];

export const ASSOCIATION_ROUTE: Route = {
  path: 'association',
  component: AssociationComponent
};
export const ASSOCIATION_DETAIL_ROUTE: Route = {
  path: 'association/:id',
  component: AssociationDetailComponent
};
