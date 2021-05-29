import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SPLASH_KEY } from '../../splash/splash.component';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set #isFirstTime as true', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue(null);
    component.isFirstTime = localStorage.getItem(SPLASH_KEY) == null;
    expect(true).toEqual(component.isFirstTime);
  });

  it('should set #isFirstTime as false', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue('true');
    component.isFirstTime = localStorage.getItem(SPLASH_KEY) == null;
    expect(false).toEqual(component.isFirstTime);
  });

  it('should set #isMobileResolution as true', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(500);
    component.isMobileResolution = window.innerWidth < 768;
    expect(true).toEqual(component.isMobileResolution);
  });

  it('should set #isMobileResolution as false', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(1000);
    component.isMobileResolution = window.innerWidth < 768;
    expect(false).toEqual(component.isMobileResolution);
  });

  it('given #isFirstTime is true and #isMobileResolution is true, then should show the correct view', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue(null);
    spyOnProperty(window, 'innerWidth').and.returnValue(500);

    component.isMobileResolution = window.innerWidth < 768;
    component.isFirstTime = localStorage.getItem(SPLASH_KEY) == null;
    fixture.detectChanges();

    expect(element.query(By.scss('.splash')).nativeElement).toBeTruthy();
  });

  it('given #isFirstTime is false and #isMobileResolution is true, then should show the correct view', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue('true');
    spyOnProperty(window, 'innerWidth').and.returnValue(500);

    component.isMobileResolution = window.innerWidth < 768;
    component.isFirstTime = localStorage.getItem(SPLASH_KEY) == null;
    fixture.detectChanges();

    expect(element.query(By.scss('.navBar')).nativeElement).toBeTruthy();
    expect(element.query(By.scss('.home')).nativeElement).toBeTruthy();
  });

  it('given #isFirstTime is false and #isMobileResolution is false, then should show the correct view', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue('true');
    spyOnProperty(window, 'innerWidth').and.returnValue(1000);

    component.isMobileResolution = window.innerWidth < 768;
    component.isFirstTime = localStorage.getItem(SPLASH_KEY) == null;
    fixture.detectChanges();

    expect(element.query(By.scss('.home')).nativeElement).toBeTruthy();
    expect(element.query(By.scss('.footer')).nativeElement).toBeTruthy();
  });
});
