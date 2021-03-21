import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './fade.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [fadeAnimation]
})
export class NavbarComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
