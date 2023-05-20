import { Component } from '@angular/core';

@Component({
  selector: 'app-watch-us',
  templateUrl: './watch-us.component.html',
  styleUrls: ['./watch-us.component.scss']
})
export class WatchUsComponent {
  // windowScrolled: boolean;

  // constructor(@Inject(DOCUMENT) private document: Document){}
  // @HostListener("window:scroll", [])

  // onWindowScroll() {
  //   if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
  //     this.windowScrolled = true;
  //   } 
  //   else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) { 
  //     this.windowScrolled = false;
  //   }
  // } 
  
  // scrollToTop() {
  //   (function smoothscroll() {

  //     var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
      
  //     if (currentScroll > 0) {
  //       window.requestAnimationFrame(smoothscroll);
  //       window.scrollTo(0, currentScroll - (currentScroll / 8));
  //     }

  //   })();
  // }
}
