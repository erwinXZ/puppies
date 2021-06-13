import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  Query
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { YEAR_DEFAULT_VALUE } from '../constants/date-format.constants';
import { PAGINATION_SCROLL_ELEMENTS } from '../constants/pagination.constants';
import { IPet, Pet } from '../model/pet.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PetFirebaseService {
  MAX_AGE_FILTER_VALUE = 6;
  nameCollection: string = 'pets';
  newCollection: AngularFirestoreCollection<IPet>;
  collectionList: Observable<IPet[]>;

  constructor(private afs: AngularFirestore) {
    this.newCollection = this.afs.collection<IPet>(this.nameCollection);
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
    const doc: AngularFirestoreDocument<IPet> = this.afs.doc(`${this.nameCollection}/${id}`);
    const doc$: Observable<Pet> = doc.valueChanges();
    return doc$;
  }

  findAll() {
    const collection: AngularFirestoreCollection<any> = this.afs.collection(
      this.nameCollection,
      ref => ref.orderBy('name', 'asc')
    );
    const collection$: Observable<IPet[]> = collection.valueChanges();
    return collection$;
  }

  findAllByFilters(filters: any, refugeName?: string) {
    const collection: AngularFirestoreCollection<any> = this.afs.collection(
      this.nameCollection,
      ref => this.setQuery(ref, filters, refugeName)
    );
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
    return this.afs
      .collection(this.nameCollection, ref =>
        ref.limit(PAGINATION_SCROLL_ELEMENTS).orderBy('name', 'asc')
      )
      .snapshotChanges();
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

  setQuery(ref: Query, filters: any, refugeName?: string) {
    let query: Query = ref;
    query.orderBy('name', 'asc');

    if (filters.specie) {
      query = query.where('specie', '==', filters.specie);
    }
    if (filters.genre) {
      query = query.where('genre', '==', filters.genre);
    }
    if (filters.age) {
      const filterStartDate = moment()
        .subtract(+filters.age + YEAR_DEFAULT_VALUE, 'years')
        .toDate();
      const filterEndDate = moment()
        .subtract(+filters.age, 'years')
        .toDate();
      query = filters.age < this.MAX_AGE_FILTER_VALUE ? query.where('birthday', '>', filterStartDate).where('birthday', '<=', filterEndDate) : query.where('birthday', '<=', filterEndDate);
    }
    if (refugeName) {
      query = query.where('refugeName', '==', refugeName);
    }

    return query;
  }
}
