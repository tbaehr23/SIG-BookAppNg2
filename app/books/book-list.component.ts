import { Component } from '@angular/core';

import { Book } from './book'; //relative to this file
import { BOOKSMOCK } from './books-mock';

@Component({
    selector: 'book-list',
    templateUrl: './app/books/book-list.component.html' //relative to index.html
})
export class BookListComponent {
    
    pageTitle: string = "Book List";
    books: Book[] = BOOKSMOCK;
}
