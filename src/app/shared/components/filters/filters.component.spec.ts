import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button should have', () => {
    const element: HTMLElement = fixture.nativeElement;
    const button = element.querySelector('button');
    expect(button.textContent).toEqual('Limpiar');
  });

  it('button should clean values', () => {
    const element: HTMLElement = fixture.nativeElement;
    const button = element.querySelector('button');
    button.click();
    expect(component.specieSelected).toBeNull();
    expect(component.genreSelected).toBeNull();
    expect(component.ageSelected).toBeNull();
  });

  it('selects should close dropdown box', () => {
    component.closeAllOptions();
    expect(component.getSpecieChildElement.contains('open')).toEqual(false);
    expect(component.getGenreChildElement.contains('open')).toEqual(false);
    expect(component.getAgeChildElement.contains('open')).toEqual(false);
  });
});
