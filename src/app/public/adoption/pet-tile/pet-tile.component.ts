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
  petAge: string;

  constructor() { }

  ngOnInit(): void {
    this.setPetAge();
  }

  setPetAge() {
    const birthday = moment(this.pet.birthday.toDate(), DATE_FORMAT);
    const currentDate: moment.Moment = moment();

    const yearsDifference = currentDate.diff(birthday, 'year');
    const monthsDifference = currentDate.diff(birthday, 'months');

    if (yearsDifference < YEAR_DEFAULT_VALUE) {
      this.petAge = monthsDifference == MONTH_DEFAULT_VALUE ? '1 mes' : monthsDifference + ' meses';
    } else {
      this.petAge = yearsDifference == YEAR_DEFAULT_VALUE ? '1 año' : yearsDifference + ' años';
    }
  }

}
