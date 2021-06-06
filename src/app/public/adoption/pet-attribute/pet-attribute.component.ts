import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-attribute',
  templateUrl: './pet-attribute.component.html',
  styleUrls: ['./pet-attribute.component.scss']
})
export class PetAttributeComponent implements OnInit {

  @Input() iconKey: string;
  @Input() attribute: string;

  constructor() { }

  ngOnInit(): void {
  }

}
