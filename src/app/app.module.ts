import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { environment } from 'src/environments/environment';
import { svgIconHome, svgIconMore } from '../assets/svg/svg-icon.model';
import { AppRoutingModule } from './app-routing.module';
import { AdoptionModule } from './public/adoption/adoption.module';
import { HomeModule } from './public/home/home.module';
import { FooterComponent } from './public/layouts/footer/footer.component';
import { MainComponent } from './public/layouts/main/main.component';
import { NavbarComponent } from './public/layouts/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';


const config = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  // databaseURL: environment.databaseURL ? environment.databaseURL : '',
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId
}

@NgModule({
  declarations: [
    MainComponent, NavbarComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    HomeModule,
    AdoptionModule,
    SvgIconsModule.forRoot({ icons: [svgIconMore, svgIconHome] }),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
