import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BookListComponent } from './books/book-list.component';
import { BookService } from './books/book.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent,
    BookListComponent 
    ],
  providers:[ BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
