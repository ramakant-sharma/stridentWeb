import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { OurBlogsComponent } from './components/our-blogs/our-blogs.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WatchUsComponent } from './components/watch-us/watch-us.component';
import { CounterAreaComponent } from './components/counter-area/counter-area.component';


@NgModule({
  declarations: [
    HomePageComponent,
    OurBlogsComponent,
    OurServicesComponent,
    WatchUsComponent,
    CounterAreaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
