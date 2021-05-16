import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetImagesComponent } from './pet-images.component';

describe('PetImagesComponent', () => {
  let component: PetImagesComponent;
  let fixture: ComponentFixture<PetImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
