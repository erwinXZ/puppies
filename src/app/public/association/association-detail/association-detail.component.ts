import { Component, OnInit } from '@angular/core';
import { IAssociationCounter } from 'src/app/shared/model/association-counter.model';

@Component({
  selector: 'app-association-detail',
  templateUrl: './association-detail.component.html',
  styleUrls: ['./association-detail.component.scss']
})
export class AssociationDetailComponent implements OnInit {
  labelAdoptedAnimals: string = 'Animales adoptados';
  labelAnimalsForAdoption: string = 'Animales en adopción';
  labelUrgent: string = 'Urgente';

  counterAdoptedAnimals: IAssociationCounter = {
    value: 110,
    label: this.labelAdoptedAnimals
  };

  counterAnimalsForAdoption: IAssociationCounter = {
    value: 110,
    label: this.labelAnimalsForAdoption
  };

  counterUrgent: IAssociationCounter = {
    value: 110,
    label: this.labelUrgent
  };

  logoImage: string =
    'https://firebasestorage.googleapis.com/v0/b/doggies-app-4e95b.appspot.com/o/Refuges%2Frefuge_gipas.jpg?alt=media&token=2ee548e7-0079-417c-92a1-33623c6b771e';
  imageList: string[] = [
    'https://cdn.shopify.com/s/files/1/0272/4770/6214/articles/when-do-puppies-start-walking.jpg?v=1593020034',
    'https://images.theconversation.com/files/377569/original/file-20210107-17-q20ja9.jpg?ixlib=rb-1.1.0&rect=278%2C340%2C4644%2C3098&q=45&auto=format&w=926&fit=clip',
    'https://www.readersdigest.ca/wp-content/uploads/2013/03/6-facts-to-know-before-owning-a-puppy.jpg'
  ];

  refugeName = 'Refugio de gatitos';

  constructor() {}

  ngOnInit(): void {}
}
