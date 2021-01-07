import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { PrintTodoComponent } from './components/print-todo/print-todo.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTodoComponent,
    PrintTodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
