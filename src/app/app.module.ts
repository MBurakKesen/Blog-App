import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule } from '@angular/router';
import { BaseService } from './services/base.service';
import { routes } from './Routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
