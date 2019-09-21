import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogCreateComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },

]