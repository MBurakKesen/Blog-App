import { Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";

export const routes:Routes=[
    {path:"",pathMatch:"full",redirectTo:"AnaSayfa"},
    {path:"AnaSayfa",component:HomeComponent}
  ]