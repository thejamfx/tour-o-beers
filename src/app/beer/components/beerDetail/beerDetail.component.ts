import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { BeerService } from '../../services/beerService.service';
import { Beer } from '../../beer.types';
import { Subscription } from 'rxjs';

@Component({
    selector: 'beer-detail',
    templateUrl: './beerDetail.component.html',
    styleUrls: ['./beerDetail.component.css'],
    providers: [BeerService]
})
export class BeerDetailComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    public beer: Beer;
    constructor (
        private route: ActivatedRoute, private location: Location, private beerService: BeerService
    ) {}
    public ngOnInit () {
        const beerId = this.route.snapshot.paramMap.get('id');
        this.subscription = this.beerService.loadBeerById(beerId).subscribe((beer) => {
            this.beer = beer;
        });
    }
    public ngOnDestroy () {
        this.subscription.unsubscribe();
    }
}
