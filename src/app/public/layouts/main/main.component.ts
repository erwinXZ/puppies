import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isMobileResolution: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setIsMobileResolution();
  }

  constructor() {
    this.setIsMobileResolution();
  }

  private setIsMobileResolution() {
    this.isMobileResolution = window.innerWidth < 768 ? this.isMobileResolution = true : this.isMobileResolution = false;
  }

  ngOnInit(): void {
  }

}
