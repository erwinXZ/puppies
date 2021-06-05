import { Component, Input, OnInit } from '@angular/core';
import { IAssociationCounter } from 'src/app/shared/model/association-counter.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() counter: IAssociationCounter;

  constructor() {}

  ngOnInit(): void {}
}
