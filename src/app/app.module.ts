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
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, BrowserAnimationsModule, CommonModule, AppRouterModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MatSnackBarModule, MatCheckboxModule,
        NavbarModule, BeerModule, DashboardModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
