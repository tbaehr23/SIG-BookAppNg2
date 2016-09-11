import { Component, OnInit } from '@angular/core';

import { Book } from './book'; //relative to this file
import { BookService } from './book.service';

@Component({
    selector: 'book-list',
    templateUrl: './app/books/book-list.component.html' //relative to index.html
})
export class BookListComponent implements OnInit {
    
    constructor( private _bookService: BookService ){}

    pageTitle: string = "Book List";
    books: Book[];

    getBooks(){
        this._bookService.getBooks().then(data => this.books = data);
    }

    ngOnInit(){
        this.getBooks();
    }
    
}
