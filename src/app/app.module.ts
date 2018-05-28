import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BeerModule } from './beer/beer.module';
import { NavbarModule } from './navbar/navbar.module';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, CommonModule, MatSnackBarModule, NavbarModule, BeerModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
