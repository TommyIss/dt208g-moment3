import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ConvertComponent } from './pages/convert/convert.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'convert', component: ConvertComponent},
    {path: '404', component: NotfoundComponent},
    {path: '**', component: NotfoundComponent}
];
