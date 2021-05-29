import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SecondPageComponent } from './second-page.component';

describe('SecondPageComponent', () => {
  let component: SecondPageComponent;
  let fixture: ComponentFixture<SecondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output nextEvent event', fakeAsync(() => {
    spyOn(component.nextEvent, 'next');

    let arrowRight = fixture.debugElement.query(By.scss('.img-arrow-right'))
      .nativeElement;
    arrowRight.click();
    tick();

    expect(component.nextEvent.next).toHaveBeenCalled();
  }));

  it('should output previousEvent event', fakeAsync(() => {
    spyOn(component.previousEvent, 'next');

    let arrowLeft = fixture.debugElement.query(By.scss('.img-arrow-left'))
      .nativeElement;
    arrowLeft.click();
    tick();

    expect(component.previousEvent.next).toHaveBeenCalled();
  }));
});
