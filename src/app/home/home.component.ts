import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) {}
  blogPosts$: Observable<any> | undefined;
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
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }
  scrollTop() {
    window.scroll({
      top: 612.0858154296875,
      left: 0,
      behavior: 'smooth',
    });
  }
}
