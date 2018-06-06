import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BeerService } from '../../services/beerService.service';
import { Beer } from '../../beer.types';
import { NotificationService } from '../../../shared/services/notificationService.service';

@Component({
    selector: 'beer-creation-dialog',
    templateUrl: './beerCreationDialog.component.html',
    styleUrls: ['./beerCreationDialog.component.css'],
    providers: [BeerService, NotificationService]
})
export class BeerCreationDialogComponent implements OnInit {
    constructor(
        private dialogRef: MatDialogRef<BeerCreationDialogComponent>,
        private beerService: BeerService,
        private notificationService: NotificationService
    ) {}

    ngOnInit () {}

    public async save ($event: Event): Promise<any> {
        $event.stopPropagation();
        $event.preventDefault();
        const beer: Beer = {
            name: 'Not a beer',
            brewery: 'Not a brewery'
        };
        await this.beerService.addBeer(beer)
            .catch(this.notificationService.addNotification.bind(this));
        this.dialogRef.close();
    }
}
