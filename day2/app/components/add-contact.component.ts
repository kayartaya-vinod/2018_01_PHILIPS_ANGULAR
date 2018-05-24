import { Component } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './templates/contact-form.html'
})
export class AddContactComponent {
    contact: Contact = new Contact();

    constructor(private service: ContactService,
        private router: Router) {
    }

    saveChanges(): void {
        this.service.addContact(this.contact)
            .subscribe(resp => {
                this.router.navigate(['/view', resp.id]);
            });

    }
}