import { TestBed } from '@angular/core/testing';

import { UserAssociationRouteAccessGuard } from './user-association-route-access.guard';

describe('UserAssociationRouteAccessGuard', () => {
  let guard: UserAssociationRouteAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAssociationRouteAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
