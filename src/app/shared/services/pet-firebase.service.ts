import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IPet, Pet } from '../model/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetFirebaseService {
  newCollection: AngularFirestoreCollection<IPet>;
  collectionList: Observable<Pet[]>;

  constructor(private afs: AngularFirestore) {
    this.newCollection = this.afs.collection<Pet>('pets');
    this.collectionList = this.newCollection.valueChanges();
  }

  create(data: IPet) {
    const newId: string = this.afs.createId();
    data.id = newId;
    return this.afs
      .collection('pets')
      .doc(String(newId))
      .set(data);
  }

  update(data: IPet) {
    return this.afs
      .collection('pets')
      .doc(String(data.id))
      .update(data);
  }

  findOne(id: string) {
    const document: AngularFirestoreDocument<IPet> = this.afs.doc('pets/' + id);
    const document$: Observable<IPet> = document.valueChanges();
    return document$;
  }

  findAll() {
    const collection: AngularFirestoreCollection<any> = this.afs.collection('pets', ref => ref.orderBy('name', 'asc'));
    const collection$: Observable<IPet[]> = collection.valueChanges();
    return collection$;
  }

  delete(id: string) {
    return this.afs
      .collection('pets')
      .doc(String(id))
      .delete();
  }

  findAllPaginate() {
    return this.afs.collection('pets', ref => ref.limit(5).orderBy('name', 'asc')).snapshotChanges();
  }

  prevPage(firstInResponse, getPrevStartAt) {
    return this.afs
      .collection('pets', ref =>
        ref
          .limit(5)
          .orderBy('name', 'asc')
          .startAt(getPrevStartAt)
          .endBefore(firstInResponse)
      )
      .get();
  }

  nextPage(lastInResponse) {
    return this.afs
      .collection('pets', ref =>
        ref
          .limit(5)
          .orderBy('name', 'asc')
          .startAfter(lastInResponse)
      )
      .snapshotChanges();
  }
}


