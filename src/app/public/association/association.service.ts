import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IRefuge, Refuge } from '../../shared/model/refuge.model';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  nameCollection = 'refuges';
  refugeCollection: AngularFirestoreCollection<IRefuge>;
  refuges: Observable<Refuge[]>;

  constructor(private afs: AngularFirestore) {}

  findAll() {
    const collection: AngularFirestoreCollection<any> = this.afs.collection(
      this.nameCollection,
      ref => ref.orderBy('name', 'asc')
    );
    return collection.valueChanges();
  }

  get(id: string) {
    return this.afs
      .collection(this.nameCollection)
      .doc(id)
      .get();
  }
}
