import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AGE, GENRE, SPECIE } from 'src/app/shared/constants/filter.contants';
import { IPetFilter } from 'src/app/shared/model/pet-filter.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})

export class FiltersComponent implements OnInit {

  specieFilter: string = SPECIE;
  genreFilter: string = GENRE;
  ageFilter: string = AGE;

  specieOptions: Array<IPetFilter> = [
    { value: 'dog', label: 'Perros' },
    { value: 'cat', label: 'Gatos' }
  ];

  genreOptions: Array<IPetFilter> = [
    { value: 'female', label: 'Hembra' },
    { value: 'male', label: 'Macho' }
  ];

  ageOptions: Array<IPetFilter> = [
    { value: 0, label: 'Menos de 1 año' },
    { value: 1, label: '1 año' },
    { value: 2, label: '2 años' },
    { value: 3, label: '3 años' },
    { value: 4, label: '4 años' },
    { value: 5, label: '5 años' },
    { value: 6, label: 'Mas de 5 años' }
  ];

  specieSelected: IPetFilter;
  genreSelected: IPetFilter;
  ageSelected: IPetFilter;

  @ViewChild(SPECIE) specieElement: ElementRef;
  @ViewChild(GENRE) genreElement: ElementRef;
  @ViewChild(AGE) ageElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event) {
    if (this.specieElement.nativeElement.contains(event.target)) {
      this.getGenreChildElement.remove('open');
      this.getAgeChildElement.remove('open');
    } else if (this.genreElement.nativeElement.contains(event.target)) {
      this.getSpecieChildElement.remove('open');
      this.getAgeChildElement.remove('open');
    } else if (this.ageElement.nativeElement.contains(event.target)) {
      this.getSpecieChildElement.remove('open');
      this.getGenreChildElement.remove('open');
    } else {
      this.closeAllOptions();
    }
  }

  closeAllOptions() {
    if (this.getSpecieChildElement.contains('open')) {
      this.getSpecieChildElement.remove('open');
    }
    if (this.getGenreChildElement.contains('open')) {
      this.getGenreChildElement.remove('open');
    }
    if (this.getAgeChildElement.contains('open')) {
      this.getAgeChildElement.remove('open');
    }
  }

  onClickSelect(filter: string) {
    if (filter == this.specieFilter) {
      if (this.getSpecieChildElement.contains('open')) {
        this.getSpecieChildElement.remove('open')
      } else {
        this.getSpecieChildElement.toggle('open');
        this.getGenreChildElement.remove('open')
        this.getAgeChildElement.remove('open')
      }
    } else if (filter == this.genreFilter) {
      if (this.getGenreChildElement.contains('open')) {
        this.getGenreChildElement.remove('open')
      } else {
        this.getGenreChildElement.toggle('open');
        this.getSpecieChildElement.remove('open')
        this.getAgeChildElement.remove('open')
      }
    } else if (filter == this.ageFilter) {
      if (this.getAgeChildElement.contains('open')) {
        this.getAgeChildElement.remove('open')
      } else {
        this.getAgeChildElement.toggle('open');
        this.getGenreChildElement.remove('open')
        this.getSpecieChildElement.remove('open')
      }
    }
  }

  onClickOption(filter: string, value: any, event) {
    event.preventDefault();
    event.stopPropagation();
    switch (filter) {
      case this.specieFilter: this.specieSelected = value; break;
      case this.genreFilter: this.genreSelected = value; break;
      case this.ageFilter: this.ageSelected = value; break;
      default: return;
    }

    this.closeAllOptions();
  }

  clean() {
    this.specieSelected = null;
    this.genreSelected = null;
    this.ageSelected = null;
  }

  get getSpecieChildElement() {
    return this.specieElement.nativeElement.children[0].classList;
  }

  get getGenreChildElement() {
    return this.genreElement.nativeElement.children[0].classList;
  }

  get getAgeChildElement() {
    return this.ageElement.nativeElement.children[0].classList;
  }

}
