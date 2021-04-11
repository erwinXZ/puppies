import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
})
export class SecondPageComponent implements OnInit {
  @Output() nextEvent = new EventEmitter<any>();
  @Output() previousEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClickNext() {
    this.nextEvent.next();
  }

  onClickPrevious() {
    this.previousEvent.next();
  }
}
