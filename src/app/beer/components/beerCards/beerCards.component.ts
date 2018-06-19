import { Component, OnInit, OnDestroy } from '@angular/core';
import { BeerService } from '../../services/beerService.service';
import { Subscription } from 'rxjs';
import { Beer } from '../../beer.types';

@Component({
  selector: 'beer-cards',
  templateUrl: './beerCards.component.html',
  styleUrls: ['./beerCards.component.css'],
  providers: [BeerService]
})
export class BeerCardsComponent implements OnInit, OnDestroy {
    public beers: Beer[];
    private beerSubscription: Subscription;
    constructor (private beerService: BeerService) { }
    public ngOnInit (): void {
        const loadOptions = {
            limit: 3
        };
        this.beerSubscription = this.beerService.loadBeers(loadOptions).subscribe((beers: Beer[]) => {
            this.beers = beers;
        });
    }
    public ngOnDestroy (): void {
        this.beerSubscription.unsubscribe();
    }
}
