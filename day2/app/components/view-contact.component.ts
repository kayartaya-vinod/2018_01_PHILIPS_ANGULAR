import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../service/contact.service';

@Component({
    templateUrl: './templates/view-contact.html'
})
export class ViewContactComponent implements OnInit {
    contact: Contact = new Contact();

    constructor(private activatedRoute: ActivatedRoute,
        private service: ContactService,
        private router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(args => {
            let id = args['id'];
            this.service.getContactById(id)
                .subscribe(data => this.contact = data);
        });
    }

    deleteContact(): void {
        if (confirm('Are you sure to delete this?')) {
            this.service.deleteContact(this.contact.id)
                .subscribe(()=>{
                    alert('Contact deleted successfully');
                    this.router.navigate(['/home']);
                });
        }
    }
}