import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../models/books';


@Injectable({
  providedIn: 'root'
})
export class BookServices {
  apiUrl = 'http://gutendex.com/books/'
  constructor(private httpClient: HttpClient) { }
  getAll():Observable<Books> {
    let newPath=this.apiUrl
    return this.httpClient.get<Books>(newPath);
  }

  getsomething(newthing:string):Observable<Books> {
    let newPath=this.apiUrl+newthing
    return this.httpClient.get<Books>(newPath);
  }

  gonext(url:string){
    return this.httpClient.get<Books>(url);
  }

  search(newthing:string){
    let newPath=this.apiUrl+"?search="+newthing
    return this.httpClient.get<Books>(newPath);
  }

  getbook(newthing:number){
    let newPath=this.apiUrl+"?ids="+newthing
    return this.httpClient.get<Books>(newPath);
  }

}
