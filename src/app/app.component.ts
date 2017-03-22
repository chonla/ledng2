import { Component, ViewChild } from '@angular/core';
import { TickerDirective } from './textticker.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = "";
  private editMode: boolean = false;
  @ViewChild(TickerDirective) vc: TickerDirective;
  @ViewChild('input') inp;

  constructor() {
    this.editMode = true;
  }

  handleKeyDown($event) {
    if ($event.keyCode === 27 && !this.editMode) {
      if (this.vc) {
        //this.vc.reset();
      }
      this.editMode = true;
      this.inp.nativeElement.focus();
    } else {
      if ($event.keyCode === 13 && this.editMode) {
        this.startScrolling();
      }
    }
  }

  startScrolling() {
    this.editMode = false;
    if (this.vc) {
      this.vc.initTicker();
    }
  }
}
