import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookreadComponent } from './component/bookread/bookread.component';
import { BooksearchComponent } from './component/booksearch/booksearch.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserpageComponent } from './component/userpage/userpage.component';
const routes: Routes = [
  {path:"",pathMatch:"full",component:BooksearchComponent},
  {path:"book/:bookid",component:BookreadComponent},
  {path:"login",component:LoginComponent},
  {path:"sign-up",component:RegisterComponent},
  {path:"user",component:UserpageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }