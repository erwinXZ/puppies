import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PAGINATION_SCROLL_ELEMENTS } from '../constants/pagination.constants';
import { IPet, Pet } from '../model/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetFirebaseService {
  nameCollection: string = 'pets';
  newCollection: AngularFirestoreCollection<IPet>;
  collectionList: Observable<Pet[]>;

  constructor(private afs: AngularFirestore) {
    this.newCollection = this.afs.collection<Pet>(this.nameCollection);
    this.collectionList = this.newCollection.valueChanges();
  }

  create(data: IPet) {
    const newId: string = this.afs.createId();
    data.id = newId;
    return this.afs
      .collection(this.nameCollection)
      .doc(String(newId))
      .set(data);
  }

  update(data: IPet) {
    return this.afs
      .collection(this.nameCollection)
      .doc(String(data.id))
      .update(data);
  }

  // Error with Code Inspector on code below
  // findOne(id: string) {
  //   const doc: AngularFirestoreDocument<IPet> = this.afs.doc(`${this.nameCollection}/${id}`);
  //   const doc$: Observable<IPet> = doc.valueChanges();
  //   return doc$;
  // }

  findAll() {
    const collection: AngularFirestoreCollection<any> = this.afs.collection(this.nameCollection, ref => ref.orderBy('name', 'asc'));
    const collection$: Observable<IPet[]> = collection.valueChanges();
    return collection$;
  }

  delete(id: string) {
    return this.afs
      .collection(this.nameCollection)
      .doc(String(id))
      .delete();
  }

  findAllPaginate() {
    return this.afs.collection(this.nameCollection, ref => ref.limit(PAGINATION_SCROLL_ELEMENTS).orderBy('name', 'asc')).snapshotChanges();
  }

  prevPage(firstInResponse, getPrevStartAt) {
    return this.afs
      .collection(this.nameCollection, ref =>
        ref
          .limit(PAGINATION_SCROLL_ELEMENTS)
          .orderBy('name', 'asc')
          .startAt(getPrevStartAt)
          .endBefore(firstInResponse)
      )
      .get();
  }

  nextPage(lastInResponse) {
    return this.afs
      .collection(this.nameCollection, ref =>
        ref
          .limit(PAGINATION_SCROLL_ELEMENTS)
          .orderBy('name', 'asc')
          .startAfter(lastInResponse)
      )
      .snapshotChanges();
  }
}

