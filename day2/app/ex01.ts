import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app-root',
    template: `<div>
        <h1>{{ message }}</h1>
        <hr />
        <p>An angular demo app by {{ name }}
    </div>`
})
class HelloWorldComponent {
    name: string;
    message: string;

    constructor() {
        this.name = 'Vinod Kumar K';
        this.message = 'Hello, World!';
    }
}

@NgModule({
    declarations: [
        // all components, directives, pipes are listed here
        HelloWorldComponent
    ],
    bootstrap: [
        // these components listed can be used in the HTML file (index.html)
        HelloWorldComponent
    ],
    imports: [
        // list of other modules that this module depends on
        BrowserModule
    ]
})
class TheMainModule {
}

// inform angular to start our application
platformBrowserDynamic().bootstrapModule(TheMainModule);