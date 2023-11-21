import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChipModule } from 'primeng/chip';
import { ProjectSliderComponent } from './project-slider/project-slider.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { TimelineModule } from 'primeng/timeline';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectSliderComponent,
    SocialNetworksComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ChipModule,
    CarouselModule,
    ButtonModule,
    ImageModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
