import { Component, Input, OnInit } from '@angular/core';
import { IRefuge } from 'src/app/shared/model/refuge.model';

@Component({
  selector: 'app-association-tile',
  templateUrl: './association-tile.component.html',
  styleUrls: ['./association-tile.component.scss']
})
export class AssociationTileComponent implements OnInit {
  @Input() refuge: IRefuge;

  constructor() {}

  ngOnInit(): void {}
}
