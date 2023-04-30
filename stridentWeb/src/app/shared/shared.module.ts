import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';
import { HeaderComponent } from './components/header/header.component';
import { StickyHeaderComponent } from './components/sticky-header/sticky-header.component';
import { SmallDevicesHeaderComponent } from './components/small-devices-header/small-devices-header.component';

@NgModule({
  declarations: [
    CarouselSliderComponent,
    HeaderComponent,
    StickyHeaderComponent,
    SmallDevicesHeaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    CarouselSliderComponent,
    HeaderComponent,
    StickyHeaderComponent,
    SmallDevicesHeaderComponent,
  ],
})
export class SharedModule {}
