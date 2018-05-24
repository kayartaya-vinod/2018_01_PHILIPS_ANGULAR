import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
    selector: 'contact-card',
    templateUrl: './templates/contact-card.html'
})
export class ContactCardComponent implements OnInit {

    @Input()
    contact: Contact = new Contact();

    constructor() {
    }

    ngOnInit(): void {
    }

}