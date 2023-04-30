import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';
import { HeaderComponent } from './components/header/header.component';
import { StickyHeaderComponent } from './components/sticky-header/sticky-header.component';



@NgModule({
  declarations: [
  
    CarouselSliderComponent,
       HeaderComponent,
       StickyHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
