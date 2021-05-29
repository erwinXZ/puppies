import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FirstPageComponent } from './first-page.component';

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output previousEvent event', fakeAsync(() => {
    spyOn(component.nextEvent, 'next');

    let arrow = fixture.debugElement.query(By.scss('.img-arrow')).nativeElement;
    arrow.click();
    tick();

    expect(component.nextEvent.next).toHaveBeenCalled();
  }));
});
