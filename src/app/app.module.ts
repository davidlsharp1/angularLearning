import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputsComponent } from './inputs/inputs.component';
import  {MatInputModule, } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatInputModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, InputsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

