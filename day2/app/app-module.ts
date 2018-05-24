import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRootComponent } from './components/app-root.component';
import { AppHeaderComponent } from './components/app-header.component';
import { ContactCardComponent } from './components/contact-card.component';
import { HttpModule } from '@angular/http';
import { ContactService } from './service/contact.service';
import { ContactListComponent } from './components/contact-list.component';
import { TitlePipe } from './pipes/title.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app-routes';
import { HomeComponent } from './components/home.component';
import { AddContactComponent } from './components/add-contact.component';
import { EditContactComponent } from './components/edit-contact.component';
import { ViewContactComponent } from './components/view-contact.component';



@NgModule({
    // all components, pipes, directives listed here
    declarations: [
        AppRootComponent,
        AppHeaderComponent,
        ContactCardComponent,
        ContactListComponent,
        TitlePipe,
        FilterPipe,
        HomeComponent,
        AddContactComponent,
        EditContactComponent,
        ViewContactComponent
    ],

    // all injectables (service classes) are listed here
    providers: [ContactService],

    // other modules depended by this module are listed here
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],

    // all components, pipes, directives that can be imported by other modules are listed here
    exports: [],

    // all components that MUST BE used in your application (index.html)
    bootstrap: [AppRootComponent, AppHeaderComponent]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);