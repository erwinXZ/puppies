import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, Query } from '@angular/fire/firestore';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { YEAR_DEFAULT_VALUE } from '../constants/date-format.constants';
import { PAGINATION_SCROLL_ELEMENTS } from '../constants/pagination.constants';
import { IPet, Pet } from '../model/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetFirebaseService {
  nameCollection: string = 'pets';
  newCollection: AngularFirestoreCollection<Pet>;
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
  findOne(id: string) {
    const doc: AngularFirestoreDocument<Pet> = this.afs.doc(`${this.nameCollection}/${id}`);
    const doc$: Observable<Pet> = doc.valueChanges();
    return doc$;
  }

  findAll() {
    const collection: AngularFirestoreCollection<any> = this.afs.collection(this.nameCollection, ref => ref.orderBy('name', 'asc'));
    const collection$: Observable<Pet[]> = collection.valueChanges();
    return collection$;
  }

  findAllByFilters(filters: any) {
    const collection: AngularFirestoreCollection<any> = this.afs.collection(this.nameCollection, ref => this.setQuery(ref, filters));
    const collection$: Observable<Pet[]> = collection.valueChanges();
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

  setQuery(ref: Query, filters: any) {
    let query: Query = ref;
    query.orderBy('name', 'asc');
    if (filters.specie) {
      query = query.where('specie', '==', filters.specie);
    }
    if (filters.genre) {
      query = query.where('genre', '==', filters.genre);
    }
    if (filters.age) {
      const filterStartDate = moment().subtract((+filters.age) + YEAR_DEFAULT_VALUE, 'years').toDate();
      const filterEndDate = moment().subtract(+filters.age, 'years').toDate();

      query = query.where('birthday', '>', filterStartDate).where('birthday', '<=', filterEndDate);
    }
    return query;
  }
}


