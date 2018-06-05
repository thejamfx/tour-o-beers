import { Component, OnInit, OnDestroy } from '@angular/core';
import { BeerService } from '../../services/beerService.service';
import { Beer } from '../../beer.types';
import { Subscription } from 'rxjs';
import { BeerModalService } from '../../services/beerModalService.service';

@Component({
    selector: 'beer-list',
    templateUrl: './beerList.component.html',
    styleUrls: ['./beerList.component.css'],
    providers: [BeerService, BeerModalService]
})
export class BeerListComponent implements OnInit, OnDestroy {
    private beers: any;
    private beersSubscription: Subscription;
    public displayedColumns: string[];

    constructor (private beerService: BeerService, private beerModalService: BeerModalService) {}

    public ngOnInit (): void {
        this.displayedColumns = ['name', 'brewery'];
        this.retrieveBeerList();
    }
    public ngOnDestroy (): void {
        this.beersSubscription.unsubscribe();
    }
    public openCreationModal (): void {
        this.beerModalService.openModel();
    }
    private retrieveBeerList (): void {
        this.beersSubscription = this.beerService.loadBeers().subscribe(this.setBeerList.bind(this));
    }
    private setBeerList (beers: any): void {
        this.beers = beers;
    }
}
