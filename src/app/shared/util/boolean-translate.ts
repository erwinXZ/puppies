import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanTranslate'
})
export class BooleanTranslatePipe implements PipeTransform {
  transform(status: boolean): string {
    if (status) {
      return 'Si';
    } else {
			return 'No';
    }
  }
}
