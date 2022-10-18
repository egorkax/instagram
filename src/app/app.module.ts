import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Test1Component} from "./test1/test1.component";
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test5Component } from './components/user/test5/test5.component';
import { Test6Component } from './test6/test6.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test5Component,
    Test6Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
