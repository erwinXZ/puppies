import { Pipe, PipeTransform } from '@angular/core';
import { DATE_FORMAT, YEAR_DEFAULT_VALUE, MONTH_DEFAULT_VALUE } from 'src/app/shared/constants/date-format.constants';
import * as moment from 'moment';

@Pipe({
  name: 'birthday'
})
export class BirthdayPipe implements PipeTransform {

  transform(birthday): string {
    let petAge: string = '';
    if (birthday) {
      const birthdayDate = moment(birthday.toDate(), DATE_FORMAT);
      const currentDate: moment.Moment = moment();

      const yearsDifference = currentDate.diff(birthdayDate, 'year');
      const monthsDifference = currentDate.diff(birthdayDate, 'months');

      if (yearsDifference < YEAR_DEFAULT_VALUE) {
        petAge = monthsDifference <= MONTH_DEFAULT_VALUE ? '1 mes' : monthsDifference + ' meses';
      } else {
        petAge = yearsDifference <= YEAR_DEFAULT_VALUE ? '1 año' : yearsDifference + ' años';
      }
    }
    return petAge;
  }

}
