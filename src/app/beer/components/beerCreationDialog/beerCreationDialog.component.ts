import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BeerService } from '../../services/beerService.service';
import { Beer } from '../../beer.types';
import { NotificationService } from '../../../shared/services/notificationService.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UploadService } from '../../../shared/services/uploadService.service';
import { UploadTaskSnapshot } from 'angularfire2/storage/interfaces';

@Component({
    selector: 'beer-creation-dialog',
    templateUrl: './beerCreationDialog.component.html',
    styleUrls: ['./beerCreationDialog.component.css'],
    providers: [BeerService, NotificationService, UploadService]
})
export class BeerCreationDialogComponent implements OnInit {
    public beer: Beer;
    private isSaving: boolean;
    private fileToUpload: File;
    constructor (
        private dialogRef: MatDialogRef<BeerCreationDialogComponent>, private beerService: BeerService,
        private notificationService: NotificationService, private uploadService: UploadService
    ) {}

    ngOnInit () {
        this.isSaving = false;
        this.initializeBeer();
    }
    private initializeBeer (): void {
        this.beer = {
            name: null,
            brewery: null
        };
    }
    public isSaveDisabled (): boolean {
        return this.isSaving || !this.hasFilledRequiredFields();
    }
    private hasFilledRequiredFields (): boolean {
        return (this.beer.name !== null && this.beer.brewery !== null) && !!this.fileToUpload;
    }
    public onFileChange ($event: Event): void {
        this.fileToUpload = (<HTMLInputElement>$event.target).files[0];
    }
    public save ($event: Event): void {
        $event.stopPropagation();
        $event.preventDefault();
        this.isSaving = true;
        this.uploadService.uploadFile('beer', this.fileToUpload)
            .then((snapshot: UploadTaskSnapshot) => {
                return snapshot.ref.getDownloadURL().then((url: string) => {
                    this.beer.imgUrl = url;
                    return this.beerService.createBeer(this.beer).then(() => this.dialogRef.close());
                });
            })
            .catch((error) => this.notificationService.addNotification(error));
    }
}
