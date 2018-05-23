import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../services/beerService.service';
import { Beer } from '../../beer.types';

@Component({
    selector: 'beer-list',
    templateUrl: './beerList.component.html',
    styleUrls: ['./beerList.component.css'],
    providers: [BeerService]
})
export class BeerListComponent implements OnInit {
    private beers: any;
    constructor (private beerService: BeerService) {}
    public ngOnInit () {
        this.retrieveBeerList();
    }
    private retrieveBeerList (): void {
        this.beerService.loadBeers().then((beers: Beer[]) => {
            this.beers = beers;
            this.beers.paginator = null;
        });
    }
}
