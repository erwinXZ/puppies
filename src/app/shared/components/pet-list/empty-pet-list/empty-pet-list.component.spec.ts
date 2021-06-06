import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPetListComponent } from './empty-pet-list.component';

describe('EmptyPetListComponent', () => {
  let component: EmptyPetListComponent;
  let fixture: ComponentFixture<EmptyPetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyPetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyPetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
