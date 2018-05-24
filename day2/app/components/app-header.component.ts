import { Component } from '@angular/core';
import { ContactService } from '../service/contact.service';

@Component({
    selector: 'app-header',
    templateUrl: './templates/app-header.html'
})
export class AppHeaderComponent {
    contactsCount: number;

    constructor(private service: ContactService) {
    }

    ngOnInit(): void {
        this.service.on('contact-deleted', ()=>{
            this.service.getAllContacts()
                .subscribe(data=>this.contactsCount = data.length);
        });
        this.service.on('contact-added', ()=>{
            this.service.getAllContacts()
                .subscribe(data=>this.contactsCount = data.length);
        });

        this.service.getAllContacts()
            .subscribe(data=>this.contactsCount = data.length);
    }
}