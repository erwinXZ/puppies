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

  editForm = this.fb.group({
    id: [null],
    birthday: [],
    description: [],
    genre: [],
    image: [],
    imagePath: [],
    name: ['test 1']
  });

  // Pagination
  previousFirstInResponse: any = [];
  // Save first document in snapshot of items received
  firstInResponse: any = [];
  // Save last document in snapshot of items received
  lastInResponse: any = [];
  // Maintain the count of clicks on Next Prev button
  paginationClickedCount = 0;
  // Disable next and prev buttons
  disableNext = false;
  disablePrev = false;

  constructor(
    protected petFirebaseService: PetFirebaseService, private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    // this.eventSubscriber.add(
    //   this.petFirebaseService.findAll().subscribe(res => {
    //     this.pets = res;
    //     console.log('this.pets', this.pets);
    //   })
    // );
    // this.eventSubscriber.add(
    //   this.petFirebaseService.findOne('M07TG5TPya94MepfIxup').subscribe(res => {
    //     this.pet = res;
    //     console.log('this.pet', this.pet);
    //   })
    // );
    // this.eventSubscriber.add(
    //   this.petFirebaseService.findAllPaginate().subscribe(
    //     res => {
    //       if (!res.length) {
    //         console.warn('No Data Available');
    //         return false;
    //       }

    //       this.firstInResponse = res[0].payload.doc;
    //       this.lastInResponse = res[res.length - 1].payload.doc;
    //       this.previousFirstInResponse.push(this.firstInResponse);

    //       this.pets = [];
    //       for (const item of res) {
    //         this.pets.push(item.payload.doc.data());
    //       }

    //       // Initialize values
    //       this.paginationClickedCount = 0;
    //       if (res.length < 5) {
    //         this.disableNext = true;
    //       } else {
    //         this.disableNext = false;
    //       }
    //       this.disablePrev = false;

    //       // Push first item to use for Previous action
    //       console.log('pets', res);
    //     },
    //     res => { }
    //   )
    // );
  }

  ngOnDestroy() {
    this.eventSubscriber.unsubscribe();
  }

  save() {
    const pet = this.createFromForm();
    // pet.id = 'Qp7sjPvCf6AgN0wfLIEm';
    if (pet.id !== null) {
      this.petFirebaseService.update(pet);
    } else {
      this.petFirebaseService.create(pet);
    }
  }

  private createFromForm(): IPet {
    const entity = {
      ...new Pet(),
      id: this.editForm.get(['id']).value,
      birthday: this.editForm.get(['birthday']).value,
      description: this.editForm.get(['description']).value,
      genre: this.editForm.get(['genre']).value,
      image: this.editForm.get(['image']).value,
      imagePath: this.editForm.get(['imagePath']).value,
      name: this.editForm.get(['name']).value
    };
    return entity;
  }

  delete() {
    this.petFirebaseService.delete('VrIJXVL4zp5e9ndcpDa5');
  }

  prevPage() {
    // this.disablePrev = true;
    // this.petFirebaseService.prevPage(this.firstInResponse, this.getPrevStartAt()).subscribe(
    //   res => {
    //     this.firstInResponse = res.docs[0];
    //     this.lastInResponse = res.docs[res.docs.length - 1];
    //     this.previousFirstInResponse.push(this.firstInResponse);

    //     this.pets = [];
    //     for (const item of res.docs) {
    //       this.pets.push(item.data());
    //     }

    //     // Maintaing page no.
    //     this.paginationClickedCount--;

    //     // Enable buttons again
    //     this.disablePrev = false;
    //     this.disableNext = false;
    //   },
    //   res => { }
    // );
  }

  nextPage() {
    // this.disableNext = true;
    // this.petFirebaseService.nextPage(this.lastInResponse).subscribe(
    //   res => {
    //     if (!res.length) {
    //       this.disableNext = true;
    //       return;
    //     }
    //     this.firstInResponse = res[0].payload.doc;
    //     this.previousFirstInResponse.push(this.firstInResponse);

    //     this.lastInResponse = res[res.length - 1].payload.doc;
    //     this.pets = [];
    //     for (const item of res) {
    //       this.pets.push(item.payload.doc.data());
    //     }

    //     this.paginationClickedCount++;

    //     this.disableNext = false;
    //   },
    //   res => { }
    // );
  }

  getPrevStartAt() {
    return this.previousFirstInResponse[this.paginationClickedCount - 1];
  }

}
