import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pet } from 'src/app/shared/model/pet.model';
import { PetFirebaseService } from 'src/app/shared/services/pet-firebase.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

}
