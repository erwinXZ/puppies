import { Component, Input, OnInit } from '@angular/core';
import { NavBarKey } from '../../constants/enum.constants';

@Component({
  selector: 'app-custom-svg',
  templateUrl: './custom-svg.component.html',
  styleUrls: ['./custom-svg.component.scss']
})
export class CustomSvgComponent implements OnInit {

  @Input() key: string;
  navBarKey = NavBarKey;

  constructor() { }

  ngOnInit(): void {
  }

}
