import { Injectable } from '@angular/core';

import { Book } from './book';
import { BOOKSMOCK } from './books-mock';

@Injectable()
export class BookService {

    getBooks(): Promise<Book[]>{
        return Promise.resolve(BOOKSMOCK);
    }
    
}
