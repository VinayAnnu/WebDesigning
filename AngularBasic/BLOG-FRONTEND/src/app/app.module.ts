import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//router module used for setting up the application level route
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { routes } from './app.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SetterGetterService } from './SharedFolder/Service/setter.getter.service';
import { HttpClientModule } from '@angular/common/http';
// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: '', redirectTo: 'home', pathMatch: 'full' },

// ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
