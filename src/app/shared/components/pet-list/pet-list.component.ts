import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPet } from '../../model/pet.model';
import { PetFirebaseService } from '../../services/pet-firebase.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  @Input() refugeName: string = '';

  eventSubscriber: Subscription = new Subscription();
  pets: IPet[];
  results: number = 0;

  specieFilter: string;
  genreFilter: string;
  ageFilter: string;

  showLoader: Boolean = true;

  constructor(protected petFirebaseService: PetFirebaseService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.showLoader = true;
    this.eventSubscriber.unsubscribe();
    this.eventSubscriber = this.petFirebaseService
      .findAllByFilters({
        specie: this.specieFilter,
        genre: this.genreFilter,
        age: this.ageFilter
      })
      .subscribe((result: IPet[]) => {
        this.pets = result;
        this.results = this.pets.length;
        this.showLoader = false;
      });
  }

  ngOnDestroy() {
    this.eventSubscriber.unsubscribe();
  }

  setSpecieFilter(specie: string) {
    this.specieFilter = specie;
    this.loadAll();
  }

  setGenreFilter(genre: string) {
    this.genreFilter = genre;
    this.loadAll();
  }

  setAgeFilter(age: string) {
    this.ageFilter = age;
    this.loadAll();
  }

  cleanFilters() {
    this.specieFilter = undefined;
    this.genreFilter = undefined;
    this.ageFilter = undefined;
    this.loadAll();
  }
}
