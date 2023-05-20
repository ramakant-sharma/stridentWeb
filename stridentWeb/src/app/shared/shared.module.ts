import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';
import { HeaderComponent } from './components/header/header.component';
import { StickyHeaderComponent } from './components/sticky-header/sticky-header.component';
import { SmallDevicesHeaderComponent } from './components/small-devices-header/small-devices-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AskedQuestionComponent } from './components/asked-question/asked-question.component';
// import {NgbModule} from './components/carousel-slider/carousel-slider.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { YearsOfExperienceComponent } from './components/years-of-experience/years-of-experience.component';

@NgModule({
  declarations: [
    CarouselSliderComponent,
    HeaderComponent,
    StickyHeaderComponent,
    SmallDevicesHeaderComponent,
    FooterComponent,
    AskedQuestionComponent,
    YearsOfExperienceComponent,
    
  ],
  imports: [CommonModule,MatExpansionModule],
  exports: [
    CarouselSliderComponent,
    HeaderComponent,
    StickyHeaderComponent,
    SmallDevicesHeaderComponent,
    FooterComponent,
    AskedQuestionComponent,
    YearsOfExperienceComponent,
  ],
})
export class SharedModule {}
