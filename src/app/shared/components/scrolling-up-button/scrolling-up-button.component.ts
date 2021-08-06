import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling-up-button',
  templateUrl: './scrolling-up-button.component.html',
  styleUrls: ['./scrolling-up-button.component.scss']
})
export class ScrollingUpButtonComponent implements OnInit {
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event:any){
    this.pageYoffset = window.pageYOffset;
  }


  constructor(
    private scroll: ViewportScroller
  ) { }

  ngOnInit(): void {
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }

}
