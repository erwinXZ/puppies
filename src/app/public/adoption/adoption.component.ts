import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IPet, Pet } from 'src/app/shared/model/pet.model';
import { PetFirebaseService } from 'src/app/shared/services/pet-firebase.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit, OnDestroy {

  eventSubscriber: Subscription = new Subscription();
  pets: IPet[];
  results: number = 0;

  specieFilter: string;
  genreFilter: string;
  ageFilter: string;

  constructor(
    protected petFirebaseService: PetFirebaseService
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.eventSubscriber.add(
      this.petFirebaseService.findAllByFilters({ specie: this.specieFilter, genre: this.genreFilter, age: this.ageFilter }).subscribe(res => {
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
