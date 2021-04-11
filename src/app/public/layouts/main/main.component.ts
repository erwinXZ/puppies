import { Component, HostListener, OnInit } from '@angular/core';
import { SPLASH_KEY } from '../../splash/splash.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isMobileResolution: boolean = false;
  isFirstTime: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setIsMobileResolution();
  }

  constructor() {
    this.setIsMobileResolution();
    if (this.isMobileResolution) {
      this.updateIsFirstTime();
    }
  }

  private setIsMobileResolution() {
    this.isMobileResolution =
      innerWidth < 768
        ? (this.isMobileResolution = true)
        : (this.isMobileResolution = false);
  }

  ngOnInit(): void {}

  updateIsFirstTime() {
    this.isFirstTime = localStorage.getItem(SPLASH_KEY) == null;
  }
}
