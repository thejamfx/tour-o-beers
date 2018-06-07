import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BeerModule } from './beer/beer.module';
import { NavbarModule } from './navbar/navbar.module';
import { MatSnackBarModule, MatCheckboxModule } from '@angular/material';
import { AppRouterModule } from './appRouter.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, BrowserAnimationsModule, CommonModule, MatSnackBarModule, MatCheckboxModule, NavbarModule, BeerModule,
        DashboardModule, AppRouterModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
