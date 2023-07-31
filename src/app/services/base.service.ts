import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:"any"
})
export class BaseService {
  public url:string="https://jsonplaceholder.typicode.com/comments";

  constructor(public http:HttpClient) { }

  getReq():Observable<Comment[]>{
    return this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/comments")
  }


}
