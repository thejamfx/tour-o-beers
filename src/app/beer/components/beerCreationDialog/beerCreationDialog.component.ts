import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BeerService } from '../../services/beerService.service';
import { Beer } from '../../beer.types';
import { NotificationService } from '../../../shared/services/notificationService.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'beer-creation-dialog',
    templateUrl: './beerCreationDialog.component.html',
    styleUrls: ['./beerCreationDialog.component.css'],
    providers: [BeerService, NotificationService]
})
export class BeerCreationDialogComponent implements OnInit {
    public beer: Beer;
    private isSaving: boolean = false;
    constructor (
        private dialogRef: MatDialogRef<BeerCreationDialogComponent>, private beerService: BeerService, private notificationService: NotificationService
    ) {}

    ngOnInit () {
        this.initializeBeer();
    }
    private initializeBeer (): void {
        this.beer = {
            name: null,
            brewery: null
        };
    }
    public isSaveDisabled (): boolean {
        return this.isSaving || this.beer.name === null || this.beer.brewery === null;
    }

    public save ($event: Event): void {
        $event.stopPropagation();
        $event.preventDefault();
        this.isSaving = true;
        this.beerService.createBeer(this.beer)
            .then(() => this.dialogRef.close())
            .catch(this.notificationService.addNotification.bind(this));
    }
}
