import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MatStepperModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatMenuModule, MatTableModule, MatCheckboxModule
} from '@angular/material';
import { BeerListComponent } from './components/beerList/beerList.component';
import { BeerFormComponent } from './components/beerForm/beerForm.component';
import { BeerDetailComponent } from './components/beerDetail/beerDetail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule, FormsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatGridListModule,
        MatMenuModule, MatTableModule, MatCheckboxModule, RouterModule
    ],
    exports: [BeerListComponent],
    declarations: [BeerListComponent, BeerFormComponent, BeerDetailComponent]
})
export class BeerModule { }
