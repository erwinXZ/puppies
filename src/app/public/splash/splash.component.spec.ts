import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SplashComponent } from './splash.component';

describe('SplashComponent', () => {
  let component: SplashComponent;
  let fixture: ComponentFixture<SplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplashComponent],
      imports: [NgbCarouselModule],
      providers: [NgbCarouselConfig],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output previousEvent event', fakeAsync(() => {
    spyOn(component.goToHomeEvent, 'next');

    component.onGoToAdoption();

    expect(component.goToHomeEvent.next).toHaveBeenCalled();
  }));
});
