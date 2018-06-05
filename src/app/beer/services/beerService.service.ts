import { BeerModule } from '../beer.module';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Beer } from '../beer.types';
import { NotificationService } from '../../shared/services/notificationService.service';

const staticBeers = [{
    id: '1',
    name: 'Non Alcoholic Beer',
    brewery: 'Unknown'
}, {
    id: '2',
    name: 'Hoppi Shiro',
    brewery: 'Unknown'
}, {
    id: '3',
    name: 'Hoppi Kuro',
    brewery: 'Unknown'
}, {
    id: '4',
    name: 'Asahi',
    brewery: 'Unknown'
}, {
    id: '5',
    name: 'Red Horse',
    brewery: 'Unknown'
}, {
    id: '6',
    name: 'Budweiser',
    brewery: 'Unknown'
}, {
    id: '7',
    name: 'Strongbow',
    brewery: 'Unknown'
}];

@Injectable()
export class BeerService {
    constructor (private notificationService: NotificationService) {}
    public loadBeers (): Observable<Beer[]> {
        this.notificationService.addNotification('Loading beers');
        const beers = staticBeers;
        return of(beers);
    }
    public loadBeerById (beerId: string): Observable<Beer> {
        this.notificationService.addNotification('Loading beer');
        const beer = staticBeers.find((beer: Beer) => beer.id === beerId);
        return of(beer);
    }
}
