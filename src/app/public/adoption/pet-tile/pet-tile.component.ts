import { Component, Input, OnInit } from '@angular/core';
import { IPet } from 'src/app/shared/model/pet.model';

@Component({
  selector: 'app-pet-tile',
  templateUrl: './pet-tile.component.html',
  styleUrls: ['./pet-tile.component.scss']
})
export class PetTileComponent implements OnInit {

  @Input() pet: IPet;

  constructor() { }

  ngOnInit(): void {
  }
}
