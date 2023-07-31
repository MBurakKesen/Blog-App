import { HttpClient } from '@Angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:"any"
})
export class BaseService {
  public url:string="https://jsonplaceholder.typicode.com/comments";

  constructor(public http:HttpClient) { }

  


}
