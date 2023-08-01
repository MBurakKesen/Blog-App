import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Yorum } from '../model/Comment';

@Injectable({
  providedIn:"any"
})
export class BaseService {
  public url:string="https://jsonplaceholder.typicode.com/comments";

  constructor(public http:HttpClient) { }

  getReq():Observable<Yorum[]>{
    return this.http.get<Yorum[]>("https://jsonplaceholder.typicode.com/comments")
  }


}
