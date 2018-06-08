import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
    MatStepperModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatMenuModule, MatTableModule, MatCheckboxModule,
    MatDialogModule, MatButtonModule, MatAutocompleteModule, MatCardModule
} from '@angular/material';
import { BeerListComponent } from './components/beerList/beerList.component';
import { BeerFormComponent } from './components/beerForm/beerForm.component';
import { BeerDetailComponent } from './components/beerDetail/beerDetail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BeerCreationDialogComponent } from './components/beerCreationDialog/beerCreationDialog.component';
import { BeerCardsComponent } from './components/beerCards/beerCards.component';

@NgModule({
    imports: [
        CommonModule, SharedModule, FormsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatGridListModule,
        MatMenuModule, MatTableModule, MatCheckboxModule, RouterModule, MatDialogModule, MatButtonModule, MatAutocompleteModule,
        MatCardModule, ReactiveFormsModule
    ],
    exports: [BeerListComponent, BeerCardsComponent],
    entryComponents: [BeerCreationDialogComponent],
    declarations: [BeerListComponent, BeerFormComponent, BeerDetailComponent, BeerCreationDialogComponent, BeerCardsComponent]
})
export class BeerModule { }
