import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Beer } from '../../beer.types';
import { BeerService } from '../../services/beerService.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'beer-form',
    templateUrl: './beerForm.component.html',
    styleUrls: ['./beerForm.component.css'],
    providers: [BeerService]
})
export class BeerFormComponent {
    @Input() public beer: Beer;
    @ViewChild('beerForm') public beerForm: NgForm;
    constructor (private location: Location, private beerService: BeerService) {}
    public canSave (): boolean {
        return true;
    }
    public save ($event: Event): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.beerForm.control.markAsPristine();
        this.beerService.updateBeer(this.beer).catch(() => {
            this.beerForm.control.markAsDirty();
        });
    }
    public delete ($event: Event): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.beerService.deleteBeer(this.beer).then(() => {
            this.location.back();
        });
    }
    public isDisabled (): boolean {
        return this.beerForm.untouched || this.beerForm.pristine;
    }
}
