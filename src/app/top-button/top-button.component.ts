import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.css']
})
export class TopButtonComponent implements OnInit {

  constructor() { }
  isShow: boolean | undefined;
  topPostToStartShowing = 1379.1424560546875;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition =
      window.scrollY || document.documentElement.scrollTop || 0;
    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPostToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  ngOnInit(): void {
  }
  scrollTop() {
    window.scroll({
      top: 612.0858154296875,
      left: 0,
      behavior: 'smooth',
    });
  }

}
