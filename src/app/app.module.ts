import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { Interceptordemo } from './interceptordemo';

import { routing } from './app.routing';


import { UserModule } from './userdisplay/user.module';
import { HomeComponent } from './home/home.component';
import { MiscModule } from './misc.module';
import { Product1Module } from './product1/product1.module';
import { AppCustomPreloader } from './appcustompreloader';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { TaskformComponent } from './taskdisplay/taskform/taskform.component';
import { DisplayReactiveTaskComponent } from './taskdisplay/display-reactive-task/display-reactive-task.component';
import { EditReactiveTaskComponent } from './taskdisplay/edit-reactive-task/edit-reactive-task.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagenotfoundComponent,
    LoginComponent,
    HomeComponent,
    TaskdisplayComponent,
    TaskformComponent,
    DisplayReactiveTaskComponent,
    EditReactiveTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    UserModule,
    MiscModule,
    Product1Module
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptordemo, multi: true}, AppCustomPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
