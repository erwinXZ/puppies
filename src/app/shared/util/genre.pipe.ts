import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../constants/enum.constants';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(genre: string): string {
    let genreLabel: string;
    switch (genre) {
      case Genre.Female: genreLabel = Genre.FemaleLabel; break;
      case Genre.Male: genreLabel = Genre.MaleLabel; break;
      default: genreLabel = ''; break;
    }
    return genreLabel;
  }

}
