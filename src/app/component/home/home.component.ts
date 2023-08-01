import { Component, OnInit } from '@angular/core';
import { Yorum } from 'src/app/model/Comment';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  constructor(public baseService:BaseService){
  }

  ngOnInit(): void {
    this.getReq();
    
  }

  comments:Yorum[]=[]
  
  getReq(){
      this.baseService.getReq().subscribe(response=>{
        this.comments=response;
      })
    }
  
    p: number = 1;
    
}
