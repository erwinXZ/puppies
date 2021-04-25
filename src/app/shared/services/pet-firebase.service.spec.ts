import { TestBed } from '@angular/core/testing';

import { PetFirebaseService } from './pet-firebase.service';

describe('PetFirebaseService', () => {
  let service: PetFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
