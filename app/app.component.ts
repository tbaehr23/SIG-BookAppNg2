import { Component } from '@angular/core';
import { BookListComponent } from './books/book-list.component'; //relative to app.component

@Component({
    selector: 'bm-app',
    template: `
        <h1>{{ title }}</h1>
        <book-list></book-list>
        `
})
export class AppComponent {
    title: string = "Book Manager";
 }
