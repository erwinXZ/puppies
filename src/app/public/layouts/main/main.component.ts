import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SPLASH_KEY } from '../../splash/splash.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isMobileResolution: boolean = false;
  isFirstTime: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setIsMobileResolution();
  }

  constructor(private router: Router) {
    this.setIsMobileResolution();
    if (this.isMobileResolution) {
      this.isFirstTime = localStorage.getItem(SPLASH_KEY) == null;
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
    this.isFirstTime = false;
  }
}
