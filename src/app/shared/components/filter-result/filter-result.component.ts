import { Component, Input, OnInit } from '@angular/core';
import { IPet } from '../../model/pet.model';

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss']
})
export class FilterResultComponent implements OnInit {
  @Input() pets: IPet[];

  constructor() {}

  ngOnInit(): void {}
}
