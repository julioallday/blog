import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopButtonComponent } from './top-button/top-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogPostComponent,
    NavBarComponent,
    TopButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
