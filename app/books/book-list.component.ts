import { Component } from '@angular/core';

@Component({
    selector: 'book-list',
    templateUrl: './app/books/book-list.component.html' //relative to index.html
})
export class BookListComponent {
    
    pageTitle: string = "Book List";
    books: any[] = [
        {id: 1, title: 'The Old Man and the Sea', authorName: 'Ernest Hemingway', genre: 'fiction', year:'1951', price: 25.00 },
        {id: 2, title: 'The Catcher in the Rye', authorName: 'J. D. Salinger', genre: 'fiction', year:'1951', price: 20.00},
        {id: 3, title: 'Macbeth', authorName: 'William Shakespeare', genre: 'tragedy', year:'1623', price: 15.95},
        {id: 4, title: 'Profiles in Courage', authorName: 'John F. Kennedy', genre: 'biography', year:'1955', price:35.95}
    ];
}
