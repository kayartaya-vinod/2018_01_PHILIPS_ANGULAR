import { OnInit, Component } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';
import * as jQuery from 'jquery';

@Component({
    selector: 'contact-list',
    templateUrl: './templates/contact-list.html'
})
export class ContactListComponent implements OnInit {

    keyword: string;
    contacts: Array<Contact> = [];

    constructor(private service: ContactService) {
    }

    ngOnInit(): void {
        this.service.on('contact-added', ()=>{
            this.service.getAllContacts().subscribe(list => this.contacts = list);
        });
        this.service.on('contact-deleted', ()=>{
            this.service.getAllContacts().subscribe(list => this.contacts = list);
        });
        this.service.on('contact-updated', ()=>{
            this.service.getAllContacts().subscribe(list => this.contacts = list);
        });
        
        this.service.getAllContacts().subscribe(list => this.contacts = list);
    }

    slideUp() {
        jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
    }

}