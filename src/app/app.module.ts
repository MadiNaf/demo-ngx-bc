import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxBasicCarouselModule } from 'ngx-basic-carousel'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxBasicCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
