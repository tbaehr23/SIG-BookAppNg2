import { Injectable } from '@angular/core';

import { BOOKSMOCK } from './books-mock';

@Injectable()
export class BookService {

    getBooks(){
        return BOOKSMOCK;
    }
}
