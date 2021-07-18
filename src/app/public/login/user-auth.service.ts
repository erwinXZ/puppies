import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(
    private afAuth: AngularFireAuth) { }

  login(email: string, password: string, rememberMe: boolean) {
    this.afAuth.setPersistence(rememberMe ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION)
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }

}
