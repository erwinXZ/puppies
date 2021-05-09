import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { AssociationModule } from './public/association/association.module';
import { HomeModule } from './public/home/home.module';
import { FooterComponent } from './public/layouts/footer/footer.component';
import { MainComponent } from './public/layouts/main/main.component';
import { NavbarComponent } from './public/layouts/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { SplashComponent } from './public/splash/splash.component';
import { FirstPageComponent } from './public/splash/first-page/first-page.component';
import { SecondPageComponent } from './public/splash/second-page/second-page.component';
import { ThirdPageComponent } from './public/splash/third-page/third-page.component';

const config = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId
};

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    SplashComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    HomeModule,
    AdoptionModule,
    AssociationModule,
    SvgIconsModule.forRoot({ icons: [svgIconMore, svgIconHome] }),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  bootstrap: [MainComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
