import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconsKey } from 'src/app/shared/constants/enum.constants';
import { Pet } from 'src/app/shared/model/pet.model';
import { PetFirebaseService } from 'src/app/shared/services/pet-firebase.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet: Pet;
  iconsKey = IconsKey;

  constructor(protected activatedRoute: ActivatedRoute, protected petFirebaseService: PetFirebaseService) {
    this.activatedRoute.params.subscribe(params => {
      this.petFirebaseService.findOne(params['id']).subscribe(pet => {
        this.pet = pet;
        console.log('this.pet', this.pet)
      });
    });
  }

  ngOnInit(): void {
  }

}
