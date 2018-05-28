import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BeerService } from '../../services/beerService.service';
import { Beer } from '../../beer.types';
import { NotificationService } from '../../../shared/services/notificationService.service';
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
    constructor(private beerService: BeerService, private notificationService: NotificationService, private changeDetectorRef: ChangeDetectorRef) {}
    public ngOnInit (): void {
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
        this.notificationService.addNotification('Beers loaded!');
    }
}
