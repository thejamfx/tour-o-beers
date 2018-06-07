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
    public stepOneGroup: FormGroup;
    public stepTwoGroup: FormGroup;
    public beer: Beer;
    public options: any[];
    constructor(
        private dialogRef: MatDialogRef<BeerCreationDialogComponent>,  private formBuilder: FormBuilder, private beerService: BeerService,
        private notificationService: NotificationService
    ) {}

    ngOnInit () {
        this.initializeBeer();
        this.initalizeFormGroups();
    }
    private initializeBeer (): void {
        this.beer = {
            name: null,
            brewery: null,
            breweryId: null
        };
    }
    private initalizeFormGroups (): void {
        this.stepOneGroup = this.formBuilder.group({
            beerNameControl: ['', Validators.required]
        });
        this.stepTwoGroup = this.formBuilder.group({
            breweryNameControl: ['', Validators.required]
        });
    }
    public isSaveDisabled (): boolean {
        return this.beer.name === null || this.beer.brewery === null;
    }
    public updateOptions (payload: any): void {
        console.log(payload);
        this.options = payload;
    }

    public async save ($event: Event): Promise<any> {
        $event.stopPropagation();
        $event.preventDefault();
        await this.beerService.addBeer(this.beer).catch(this.notificationService.addNotification.bind(this));
        this.dialogRef.close();
    }
}
