import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() carouselType: string;
  @Input() mainImage: string;
  @Input() images: string[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.images) {
      if (this.mainImage) {
        this.images.unshift(this.mainImage)
      }
    } else {
      if (this.mainImage) {
        this.images = [this.mainImage];
      } else {
        this.images = []
      }
    }
  }
}
