import { Component, Input, OnInit } from '@angular/core';
import { IPet } from 'src/app/shared/model/pet.model';
import { DATE_FORMAT, YEAR_DEFAULT_VALUE, MONTH_DEFAULT_VALUE } from 'src/app/shared/constants/date-format.constants';
import * as moment from 'moment';

@Component({
  selector: 'app-pet-tile',
  templateUrl: './pet-tile.component.html',
  styleUrls: ['./pet-tile.component.scss']
})
export class PetTileComponent implements OnInit {

  @Input() pet: IPet;

  constructor() { }

  ngOnInit(): void {

  }
}
