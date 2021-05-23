import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ThirdPageComponent } from './third-page.component';

describe('ThirdPageComponent', () => {
  let component: ThirdPageComponent;
  let fixture: ComponentFixture<ThirdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output goToHomeEvent event', fakeAsync(() => {
    spyOn(component.goToHomeEvent, 'next');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();

    expect(component.goToHomeEvent.next).toHaveBeenCalled();
  }));

  it('should output previousEvent event', fakeAsync(() => {
    spyOn(component.previousEvent, 'next');

    let arrow = fixture.debugElement.query(By.scss('.img-arrow')).nativeElement;
    arrow.click();
    tick();

    expect(component.previousEvent.next).toHaveBeenCalled();
  }));
});
