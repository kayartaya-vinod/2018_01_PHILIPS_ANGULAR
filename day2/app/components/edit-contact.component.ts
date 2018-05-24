import { Component } from '@angular/core';
import { Contact } from '../model/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../service/contact.service';

@Component({
    templateUrl: './templates/contact-form.html'
})
export class EditContactComponent {
    contact: Contact = new Contact();

    constructor(private activatedRoute: ActivatedRoute,
        private service: ContactService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(args => {
            let id = args['id'];
            this.service.getContactById(id)
                .subscribe(data => this.contact = data);
        });
    }

    saveChanges(): void {
        this.service.updateContact(this.contact)
            .subscribe(c1 => {
                this.router.navigate(['/view', c1.id]);
            });
    }
}