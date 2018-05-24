import { HomeComponent } from './components/home.component';
import { AddContactComponent } from './components/add-contact.component';
import { EditContactComponent } from './components/edit-contact.component';
import { ViewContactComponent } from './components/view-contact.component';

export const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'add',
        component: AddContactComponent
    },
    {
        path: 'edit/:id',
        component: EditContactComponent
    },
    {
        path: 'view/:id',
        component: ViewContactComponent
    }
];