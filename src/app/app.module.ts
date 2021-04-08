import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
