import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconsKey } from 'src/app/shared/constants/enum.constants';
import { IPet } from 'src/app/shared/model/pet.model';
import { PetFirebaseService } from 'src/app/shared/services/pet-firebase.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet: IPet;
  iconsKey = IconsKey;
  whatsappLink = '';

  constructor(protected activatedRoute: ActivatedRoute, protected petFirebaseService: PetFirebaseService) {
    this.activatedRoute.params.subscribe(params => {
      this.petFirebaseService.findOne(params['id']).subscribe((pet: IPet) => {
        this.pet = pet;
        this.setWhatsapp(this.pet.cellphone);
      });
    });
  }

  setWhatsapp(cellphone) {
    this.whatsappLink = 'https://wa.me/' + cellphone + '?text=' + encodeURIComponent('Hola! Me interesa adoptar a ' + this.pet.name);
  }

  ngOnInit(): void {
  }
}
