import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
    selector: 'app-root',
    template: `<h1>Hello, World!</h1>
        <hr />
        <welcome></welcome>
        <author></author>
    `
})
class HelloComponent { }


@Component({
    selector: 'welcome',
    template: '<h1>Welcome to Angular training!</h1>'
})
class WelcomeComponent { }


@Component({
    selector: 'author',
    template: 'Vinod Kumar &lt;vinod@vinod.co&gt;'
})
class AuthorComponent { }

@NgModule({
    declarations: [AuthorComponent],
    exports: [AuthorComponent],
    imports: []
})
class ModuleX{}


@NgModule({
    declarations: [HelloComponent, WelcomeComponent],
    bootstrap: [HelloComponent],
    imports: [BrowserModule, ModuleX]
})
class MyModule { }

platformBrowserDynamic().bootstrapModule(MyModule);