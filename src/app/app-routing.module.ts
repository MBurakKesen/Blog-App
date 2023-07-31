import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BaseService } from './services/base.service';

export const routes:Routes=[
  {path:"", redirectTo:"anaSayfa",pathMatch:"full"},
  {path:"anaSayfa",component:HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[BaseService]
})
export class AppRoutingModule { }
