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

  constructor(protected petFirebaseService: PetFirebaseService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.eventSubscriber.add(
      this.petFirebaseService
        .findAllByFilters(
          {
            specie: this.specieFilter,
            genre: this.genreFilter,
            age: this.ageFilter
          },
          this.refugeName
        )
        .subscribe(res => {
          this.pets = res;
          this.results = this.pets.length;
        })
    );
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
