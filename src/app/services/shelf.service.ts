import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Shelf } from '../models/shelf';


@Injectable({
  providedIn: 'root'
})
export class ShelfServices {
  apiUrl = 'https://localhost:44373/api/'
  constructor(private httpClient: HttpClient) { }
  add(shelf:Shelf):Observable<ResponseModel> {
    let newPath=this.apiUrl+"Shelf/add"
    return this.httpClient.post<ResponseModel>(newPath,shelf);
  }
  delete(shelf:Shelf):Observable<ResponseModel> {
    let newPath=this.apiUrl+"Shelf/delete"
    return this.httpClient.post<ResponseModel>(newPath,shelf);
  }

  getById(Id:number):Observable<ListResponseModel<Shelf>> {
    let newPath=this.apiUrl+"Shelf/GetById?Id="+Id
    return this.httpClient.get<ListResponseModel<Shelf>>(newPath);
  }
  read(url:string){
    let newPath=this.apiUrl+"Shelf/reading?url="+url
    return this.httpClient.get<string>(newPath);
  }

}
