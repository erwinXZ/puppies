import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationTileComponent } from './association-tile.component';

describe('AssociationTileComponent', () => {
  let component: AssociationTileComponent;
  let fixture: ComponentFixture<AssociationTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
