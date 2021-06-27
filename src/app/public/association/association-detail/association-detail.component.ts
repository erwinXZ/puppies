import { Component, Input, OnInit } from '@angular/core';
import { IAssociationCounter } from 'src/app/shared/model/association-counter.model';
import { ActivatedRoute } from '@angular/router';
import { AssociationService } from '../association.service';
import { IRefuge } from 'src/app/shared/model/refuge.model';
import { WhatsAppServiceService } from 'src/app/shared/services/whats-app-service.service';

@Component({
  selector: 'app-association-detail',
  templateUrl: './association-detail.component.html',
  styleUrls: ['./association-detail.component.scss']
})
export class AssociationDetailComponent implements OnInit {
  refuge: IRefuge;

  id: string = '';
  labelAdoptedAnimals: string = 'Animales adoptados';
  labelAnimalsForAdoption: string = 'Animales en adopción';
  labelUrgent: string = 'Urgente';

  counterAdoptedAnimals: IAssociationCounter;
  counterAnimalsForAdoption: IAssociationCounter;
  counterUrgent: IAssociationCounter;

  constructor(
    private route: ActivatedRoute,
    protected associationService: AssociationService,
    protected whatsAppServiceService: WhatsAppServiceService
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.associationService.get(this.id).subscribe(data => {
      this.refuge = data.data();

      this.counterAdoptedAnimals = {
        value: this.refuge.adoptedAnimals,
        label: this.labelAdoptedAnimals
      };
      this.counterUrgent = {
        value: this.refuge.urgentQuantity,
        label: this.labelUrgent
      };
      this.counterAnimalsForAdoption = {
        value: this.refuge.animalsForAdoption,
        label: this.labelAnimalsForAdoption
      };
    });
  }

  getWhatsApp() {
    return this.whatsAppServiceService.getWhatsAppLink(this.refuge.cellphone);
  }
}
