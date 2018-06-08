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
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, BrowserAnimationsModule, CommonModule, AppRouterModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, AngularFireStorageModule,
        MatSnackBarModule, MatCheckboxModule,
        NavbarModule, BeerModule, DashboardModule, ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
