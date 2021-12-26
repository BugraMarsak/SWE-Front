import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserpageComponent } from './component/userpage/userpage.component';
import { BooksearchComponent } from './component/booksearch/booksearch.component'; 
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookreadComponent } from './component/bookread/bookread.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    BooksearchComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    BookreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
