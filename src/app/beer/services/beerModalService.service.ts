import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BeerCreationDialogComponent } from '../components/beerCreationDialog/beerCreationDialog.component';

@Injectable({
    providedIn: 'root',
})
export class BeerModalService {
    constructor (private dialogService: MatDialog) {}
    public openModel (): void {
        this.dialogService.open(BeerCreationDialogComponent, {
            width: '800px',
            height: '600px'
        });
    }
}
