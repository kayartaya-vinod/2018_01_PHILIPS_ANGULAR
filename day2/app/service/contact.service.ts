import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../model/contact';
import 'rxjs/add/operator/map';
import { EventEmitter } from 'events';

const baseUrl: string = 'https://vinod.co/randomdata/contacts/';
// const baseUrl: string = 'http://localhost:5000/contacts/';

@Injectable()
export class ContactService extends EventEmitter{

    constructor(private http: Http) {
        super();
    }

    getContactById(id: number): Observable<Contact> {
        return this.http.get(baseUrl + id).map(resp => resp.json())
    }

    getAllContacts(): Observable<Array<Contact>> {
        return this.http.get(baseUrl)
            .map(resp => resp.json());
    }

    deleteContact(id: number): Observable<Contact> {
        return this.http.delete(baseUrl + id).map(resp => {
            this.emit('contact-deleted');
            return resp.json();
        });
    }

    updateContact(contact: Contact): Observable<Contact> {
        // this.http.put(..) makes a HTTP PUT request to the 
        // given URL and converts the 2nd parameter as a JSON string
        // adds to the payload, and adds a header Content-Type: application/json
        return this.http.put(baseUrl + contact.id, contact)
            .map(resp => {
                this.emit('contact-updated');
                return resp.json() as Contact;
            });
    }

    addContact(contact: Contact): Observable<any> {
        return this.http.post(baseUrl, contact)
            .map(resp => { 
                this.emit('contact-added');
                return resp.json();
            });
    }
}