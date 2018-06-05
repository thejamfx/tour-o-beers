import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { BeerService } from '../../services/beerService.service';
import { Beer } from '../../beer.types';

@Component({
    selector: 'beer-detail',
    templateUrl: './beerDetail.component.html',
    styleUrls: ['./beerDetail.component.css'],
    providers: [BeerService]
})
export class BeerDetailComponent implements OnInit {
    private beer: Beer;
    constructor (private route: ActivatedRoute, private location: Location, private beerService: BeerService) {}
    public ngOnInit () {
        const beerId = this.route.snapshot.paramMap.get('id');
        this.beerService.loadBeerById(beerId).subscribe((beer) => {
            this.beer = beer;
        });
    }
}
