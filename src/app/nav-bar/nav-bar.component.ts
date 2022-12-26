import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  header_variable: boolean = false;
  @HostListener("document:scroll")
  scrollfunction() {
    if ( document.documentElement.scrollTop > 600) {
      this.header_variable = true;
    } else {
      this.header_variable = false;
    }
  }
}
