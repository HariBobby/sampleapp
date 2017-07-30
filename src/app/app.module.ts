import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header.component";
import {ShoppingModule} from "./shopping/shopping.module";
import {HomeComponent, ListComponent, ManageComponent, NotFoundComponent} from "./routes.components";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, HomeComponent,
    ListComponent, NotFoundComponent, ManageComponent
  ],
  imports: [
    BrowserModule, ShoppingModule, RouterModule.forRoot([
      {path:"", component: HomeComponent},
      {path:"list", component: ListComponent},
      {path:"manage", component: ManageComponent},
      {path:"**", component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
