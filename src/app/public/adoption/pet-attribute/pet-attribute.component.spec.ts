import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAttributeComponent } from './pet-attribute.component';

describe('PetAttributeComponent', () => {
  let component: PetAttributeComponent;
  let fixture: ComponentFixture<PetAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
