import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BeerService } from '../../services/beerService.service';
import { Beer } from '../../beer.types';
import { Subscription } from 'rxjs';

@Component({
    selector: 'beer-list',
    templateUrl: './beerList.component.html',
    styleUrls: ['./beerList.component.css'],
    providers: [BeerService]
})
export class BeerListComponent implements OnInit, OnDestroy {
    private beers: any;
    private beersSubscription: Subscription;
    public displayedColumns: string[];
    constructor(private beerService: BeerService, private changeDetectorRef: ChangeDetectorRef) {}
    public ngOnInit (): void {
        this.displayedColumns = ['name', 'brewery'];
        this.retrieveBeerList();
    }
    public ngOnDestroy (): void {
        this.beersSubscription.unsubscribe();
    }
    private retrieveBeerList (): void {
        this.beersSubscription = this.beerService.loadBeers().subscribe(this.setBeerList.bind(this));
    }
    private setBeerList (beers: any): void {
        this.beers = beers;
    }
}
