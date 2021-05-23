import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit {
  @Output() nextEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  onClickNext() {
    this.nextEvent.next();
  }
}
