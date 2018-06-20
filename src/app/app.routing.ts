import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeSubComponent } from './home-sub/home-sub.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    { path: '', component:LoginComponent },
    { path: 'home', component:HomeComponent },
    { path: 'homesub', component:HomeSubComponent },
    { path: 'contact', component:ContactComponent },

     // otherwise redirect to login
     { path: '**', redirectTo: '' }

];


export const routing = RouterModule.forRoot(appRoutes);
