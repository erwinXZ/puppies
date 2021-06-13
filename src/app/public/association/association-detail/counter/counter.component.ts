import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { IAssociationCounter } from 'src/app/shared/model/association-counter.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counter: IAssociationCounter;
  @Input() backgroundColor: string;

  constructor() {}

  ngOnInit(): void {}
}
