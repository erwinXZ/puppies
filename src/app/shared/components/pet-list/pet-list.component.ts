import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPet, Pet } from '../../model/pet.model';
import { PetFirebaseService } from '../../services/pet-firebase.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  @Input() refugeName: string = '';

  eventSubscriber: Subscription = new Subscription();
  pets: Pet[];
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
      this.petFirebaseService.findAllByFilters({ specie: this.specieFilter, genre: this.genreFilter, age: this.ageFilter }).subscribe((result: Pet[]) => {
        let res = (result as Pet[]).map((pet) => this.getPet(pet));
        this.pets = res;
        this.results = this.pets.length;
        console.log('this.pets', this.pets);
      })
    );
  }

  getPet(data: Pet) {
    const pet = new Pet();
    pet.id = data.id;
    pet.birthday = data.birthday;
    pet.castrated = data.castrated;
    pet.cellphone = data.cellphone;
    pet.description = data.description;
    pet.genre = data.genre;
    pet.imagePath = data.imagePath;
    pet.name = data.name;
    pet.status = data.status;
    pet.specie = data.specie;
    pet.vaccinated = data.vaccinated;
    return pet;
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
