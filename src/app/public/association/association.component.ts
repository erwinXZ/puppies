import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRefuge } from 'src/app/shared/model/refuge.model';
import { AssociationService } from './association.service';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit, OnDestroy {
  eventSubscriber: Subscription = new Subscription();
  refuges: IRefuge[];
  showLoader: Boolean = true;

  constructor(protected associationService: AssociationService) {}

  ngOnInit(): void {
    this.loadRefuges();
  }

  ngOnDestroy() {
    this.eventSubscriber.unsubscribe();
  }

  loadRefuges() {
    this.eventSubscriber.add(
      this.associationService.findAll().subscribe(res => {
        this.refuges = res;
        this.showLoader = false;
      })
    );
  }
}
