import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

export const SPLASH_KEY = 'SplashKey';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  providers: [NgbCarouselConfig],
})
export class SplashComponent implements OnInit {
  @ViewChild('myCarousel') myCarousel: NgbCarousel;
  @Output() goToHomeEvent = new EventEmitter<any>();

  constructor(config: NgbCarouselConfig) {
    config.interval = 100000;
    config.keyboard = true;
    config.wrap = false;
    config.showNavigationArrows = false;

    localStorage.setItem(SPLASH_KEY, 'true');
  }

  ngOnInit(): void { }

  goToNextPage() {
    this.myCarousel.next();
  }

  goToPreviousPage() {
    this.myCarousel.prev();
  }

  onGoToAdoption() {
    this.goToHomeEvent.next();
  }
}
