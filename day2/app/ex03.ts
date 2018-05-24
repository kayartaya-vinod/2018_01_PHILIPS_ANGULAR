import { Component, NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    template: `<h1>Hello, World!</h1>
        <hr />

        <p class="lead">Username is {{username}}</p>
        <input type="text" [(ngModel)] =  "city" />

        <button class="btn btn-primary" (click)="handleClick()" >Show city</button>

        <p class="lead">City is {{ city }} </p>

    `
})
class HelloComponent { 

    username: string;
    city: string;

    constructor(){
        this.username = 'Vinod';
    }

    handleClick() {
        alert('The city is ' + this.city);
    }
}

@NgModule({
    declarations: [HelloComponent],
    bootstrap: [HelloComponent],
    imports: [BrowserModule, FormsModule]
})
class MyModule { }

platformBrowserDynamic().bootstrapModule(MyModule);