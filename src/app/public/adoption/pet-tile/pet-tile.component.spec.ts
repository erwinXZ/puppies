import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pet } from 'src/app/shared/model/pet.model';
import * as moment from 'moment';

import { PetTileComponent } from './pet-tile.component';

describe('PetTileComponent', () => {
  let component: PetTileComponent;
  let fixture: ComponentFixture<PetTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetTileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate age more than a year', () => {
    component.pet = new Pet('Id', moment(new Date(2020, 1, 1)), true);
    expect(component.petAge).toBeTruthy();
  });

  it('should calculate age less than a year', () => {
    component.pet = new Pet('Id', moment(new Date()), true);
    expect(component.petAge).toBeTruthy();
  });
});
