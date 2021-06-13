import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { DATE2_FORMAT } from '../constants/date-format.constants';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(date): string {
    let customDate = '';
    if (date) {
      customDate = moment(date.toDate()).format(DATE2_FORMAT);
    }
    return customDate;
  }

}
