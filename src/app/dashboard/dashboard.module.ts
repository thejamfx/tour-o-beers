import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BeerModule } from '../beer/beer.module';

@NgModule({
    imports: [
        CommonModule, BeerModule
    ],
    exports: [DashboardComponent],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
