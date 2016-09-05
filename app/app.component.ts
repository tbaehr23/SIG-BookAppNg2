import { Component } from '@angular/core';

@Component({
    selector: 'bm-app',
    template: '<h1>{{ title }}</h1>'
})
export class AppComponent {
    title: string = "Book Manager";
 }
