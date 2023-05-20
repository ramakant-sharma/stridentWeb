import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-area',
  templateUrl: './counter-area.component.html',
  styleUrls: ['./counter-area.component.scss']
})
export class CounterAreaComponent {

  count1 = 2148;

  accuretStop: any = setInterval(() => {
    this.count1++;
    if (this.count1 == 2547) {
      clearInterval(this.accuretStop);
    }
  }, 1)

  /**count2*/
  count2 = 1223;

  countstart: any = setInterval(() => {
    this.count2++;
    if (this.count2 == 1547) {
      clearInterval(this.countstart);
    }
  }, 1)
  /***count3 */
  count3 = 2204;

  countstart2: any = setInterval(() => {
    this.count3++;
    if (this.count3 == 2587) {
      clearInterval(this.countstart2)
    }
  }, 1)

  /**4 */
  count4 = 1452;
  counterstart3: any = setInterval(() => {
    this.count4++;
    if (this.count4 == 1879) {
      clearInterval(this.counterstart3)
    }
  }, 1)
}
