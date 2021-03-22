import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AdoptionModule } from './public/adoption/adoption.module';
import { HomeModule } from './public/home/home.module';
import { FooterComponent } from './public/layouts/footer/footer.component';
import { MainComponent } from './public/layouts/main/main.component';
import { NavbarComponent } from './public/layouts/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { svgIconMore, svgIconHome } from '../assets/svg/svg-icon.model';

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
    SvgIconsModule.forRoot({ icons: [svgIconMore, svgIconHome] })
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
