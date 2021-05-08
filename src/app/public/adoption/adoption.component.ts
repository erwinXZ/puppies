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
  pet: IPet;

  constructor(
    protected petFirebaseService: PetFirebaseService
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.eventSubscriber.add(
      this.petFirebaseService.findAll().subscribe(res => {
        this.pets = res;
        console.log('this.pets', this.pets);
      })
    );
  }

  ngOnDestroy() {
    this.eventSubscriber.unsubscribe();
  }

}
