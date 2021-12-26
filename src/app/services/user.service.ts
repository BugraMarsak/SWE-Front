import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://localhost:44373/api/'
  constructor(private httpClient: HttpClient) { }

  getById(Id:number):Observable<SingleResponseModel<User>> {
    let newPath=this.apiUrl+"user/GetById?Id="+Id
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }
}