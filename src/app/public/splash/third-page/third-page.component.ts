import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent implements OnInit {
  @Output() previousEvent = new EventEmitter<any>();
  @Output() goToHomeEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClickPrevious() {
    this.previousEvent.next();
  }

  onGoToAdoption() {
    this.goToHomeEvent.next();
  }
}
