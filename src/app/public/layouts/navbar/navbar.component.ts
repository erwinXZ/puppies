import { Component, OnInit } from '@angular/core';
import { NavBarKey } from 'src/app/shared/constants/enum.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBarItems = [
    {
      key: NavBarKey.Pet,
      route: '',
      selected: true
    },
    {
      key: NavBarKey.Association,
      route: 'association',
      selected: false
    },
    {
      key: NavBarKey.Form,
      route: 'admin',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  onNavBarItemClick(indexNavBar: number) {
    this.navBarItems.map((navBarItem, index) => {
      navBarItem.selected = indexNavBar == index;
    });
  }
}
